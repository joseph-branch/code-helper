const express = require('express');
const app = express();
const csv = require("csvtojson");
const cors = require('cors');
const multer = require('multer');
const history = require('connect-history-api-fallback');
const staticFileMiddleware = express.static('dist');
const path = require('path');
const { spawn } = require('child_process');

app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({extended: false})); // Parses incoming requests with urlencoded payloads

app.use(staticFileMiddleware); // 1st call for unredirected requests 
app.use(history({htmlAcceptHeaders: ['text/html', 'application/json', 'multipart/form-data']}));
app.use(staticFileMiddleware); // 2nd call for redirected requests
app.use(cors({ origin: '*', optionsSuccessStatus: 200, allowedHeaders: '*' }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/root/clang-llvm/llvm-project/build/uploadedFiles')
  },
  filename: function (req, file, cb) {
    cb(null, "test.cpp")
  }
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  csv().fromFile('/root/clang-llvm/llvm-project/clang-tools-extra/codehelper/filename.txt').then((data) => {
    res.send(JSON.stringify(data))
  });
});

app.post('/', upload.any(), async (req, res) => {
  const files = req.files;
  const fileExtension = files[0].originalname.split(".").pop()

  if (!files || fileExtension != "cpp") {
    const error = new Error('Files must be provided && must be .cpp extensions')
    error.httpStatusCode = 400
    res.status(403).send(error);
  }
  else {
    const child = spawn('/root/clang-llvm/llvm-project/build/bin/codehelper', ['/root/clang-llvm/llvm-project/build/uploadedFiles/test.cpp', '--']);

    for await (const data of child.stdout) {
      console.log(`stdout from the child: ${data}`);
    };

    child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
    
    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    csv().fromFile('/root/clang-llvm/llvm-project/clang-tools-extra/codehelper/filename.txt').then((data) => {
      let dataSet = new Set(data);
      data = [...dataSet]
      res.send(JSON.stringify(data))
    });
  }
});

module.exports = app;