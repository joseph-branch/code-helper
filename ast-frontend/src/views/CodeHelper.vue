<template>
  <div class="content-containter">
    <div class="full-column-1" style="color: red">
      <div class="card">
        <div class="card-header">
          <h5 class="card-left-text mt-2">MENU</h5>
        </div>
        <div class="card-body">Menu Contents</div>
      </div>
    </div>

    <div class="full-column-2" style="color: blue">
      <div class="card">
        <div class="d-flex card-body justify-content-center">
          <div>
            <form enctype="multipart/form-data" id="upload-form">
              <input
                type="file"
                id="file"
                ref="file"
                @change="handleFilesUpload()"
                hidden
              />
              <label id="upload-file" for="file">Upload Files</label>
              <span id="file-chosen">{{
                uploadedFilename == "" ? "No file chosen" : uploadedFilename
              }}</span>
            </form>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="d-flex card-header justify-content-between">
          <h5 class="card-left-text mt-2">CODE</h5>
          <div>
            <input
              type="button"
              id="edit-code"
              @click="toggleEditMode"
              hidden
            />
            <label id="edit-button" for="edit-code">Edit Code</label>
          </div>
        </div>

        <div id="code-box" class="card-body card-left-text code-overflow">
          <pre
            id="code-box-code"
            class="code-overflow"
            v-show="!isEditMode"
          ></pre>
          <textarea
            class="text-area-perserved"
            v-show="isEditMode"
            v-model="fileContents"
          />
        </div>

        <div class="d-flex card-footer justify-content-end">
          <div>
            <input
              type="button"
              id="submit-code"
              @click="postUploadedCode"
              hidden
            />
            <label id="submit-button" for="submit-code">Submit Code</label>
          </div>
        </div>
      </div>
    </div>

    <div class="full-column-3" style="color: green">
      <div class="card">
        <div class="card-header card-left-text mt-2">
          <h5>EXPLANATION</h5>
        </div>
        <div class="card-body">
          {{ explanation }}
        </div>
      </div>

      <div class="card">
        <div class="card-header card-left-text mt-2">
          <h5>REFERENCE</h5>
        </div>
        <div class="card-body">
          <!-- Add some links to C++ reference sites -->
        </div>
      </div>

      <div class="card">
        <div class="card-header card-left-text mt-2">
          <h5>LEGEND</h5>
        </div>
        <div class="card-body">
          <!-- Create a code legend for different color statements -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

String.prototype.splice = function (idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

export default {
  name: "CodeHelper",
  components: {},
  data() {
    return {
      uploadedFile: "",
      uploadedFilename: "",
      fileContents: [],
      exampleCode: "",
      resultData: [],
      queriedEvents: [],
      explanation:
        "Once you submit a file, click on any of the highlighted text for an explanation to be displayed here.",
      isEditMode: false,
      splitCode: "",
    };
  },
  methods: {
    reset() {
      this.uploadedFile = "";
      this.uploadedFilename = "";
      this.fileContents = [];
      this.exampleCode = "";
      this.resultData = [];
      this.queriedEvents = [];
      this.explanation =
        "Once you submit a file, click on any of the highlighted text for an explanation to be displayed here.";
      this.isEditMode = false;
      this.splitCode = "";
    },
    handleFilesUpload() {
      if (this.$refs.file.files[0].name.split(".").pop() == "cpp") {
        this.reset();
        this.uploadedFile = this.$refs.file.files[0];
        this.uploadedFilename = this.uploadedFile.name;

        let reader = new FileReader();

        reader.readAsText(this.uploadedFile, "UTF-8");

        reader.onload = (evt) => {
          this.fileContents.push(evt.target.result);
          this.fileContents = this.fileContents[0]
            .replaceAll("<", "&lt")
            .replaceAll(">", "&gt");

          this.highlightCode();
        };

        reader.onerror = (event) => {
          alert(event.target.error.name);
        };
      }
    },
    handleExplination(e) {
      console.log(e);
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    highlightCode() {
      this.splitCode = this.fileContents.split(/\r\n|\n/);
      console.log(this.resultData);
      for (let line in this.resultData) {
        let endCol = this.resultData[line]["endCol"];
        this.splitCode[this.resultData[line]["endLine"] - 1] = this.splitCode[
          this.resultData[line]["endLine"] - 1
        ].splice(endCol + 1, 0, "</span>");

        let startCol = this.resultData[line]["startCol"];
        this.splitCode[this.resultData[line]["startLine"] - 1] = this.splitCode[
          this.resultData[line]["startLine"] - 1
        ].splice(
          startCol - 1,
          0,
          `<span data-type='${this.resultData[line]["type"]}' style='background-color: rgba(77,145,226,.3); cursor: pointer'>`
        );
      }

      let code = this.splitCode.join("<br>");
      let dom = document.getElementById("code-box-code");
      dom.innerHTML = code;

      this.queriedEvents = document.querySelectorAll("[data-type]");

      this.queriedEvents.forEach((qe) => {
        qe.addEventListener("click", (event) => {
          const type = event.target.dataset["type"];
          console.log(type);
          if (type === "forloop") {
            this.explanation = "This is a for loop";
          } else if (type === "ifelse") {
            this.explanation = "This is a if statement";
          } else if (type === "whileloop") {
            this.explanation = "This is a while loop";
          } else if (type === "dowhile") {
            this.explanation = "This is a do-while loop";
          } else if (type === "switch") {
            this.explanation = "This is a switch statement";
          }
        });
      });

      // Allow for the same file to be re-uploaded
      $("#file")[0].value = "";
    },
    postUploadedCode() {
      let formData = new FormData();
      formData.append("files[]", this.uploadedFile);

      axios
        .post("https://codehelper.wtf", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((data) => {
          if (data.status == 200) {
            this.resultData = data.data;
            this.highlightCode();
          }
        });
    },
  },
};
</script>

<style scoped>
.content-containter {
  display: flex;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
}

.full-column-1 {
  flex-direction: column;
  flex: 0 0 17.5%;
  height: 97.5%;
}

.full-column-2 {
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(55% - 50px);
  height: 97.5%;
  max-width: calc(55% - 30px) !important;
  gap: 1rem;
}

.full-column-3 {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 0 0 27.5%;
  height: 97.5%;
}

.code-overflow {
  overflow: scroll;
}

.card {
  height: 100%;
  background-color: #1f1f1f;
}

.full-column-2 > div:first-child {
  display: flex;
  justify-content: flex-end;
  height: 10%;
}

.full-column-2 > div:not(:first-child) {
  display: flex;
  justify-content: flex-end;
  height: calc(100% - 1rem - 10%);
}

.full-column-3 > div {
  display: flex;
  flex-basis: 0 0 25%;
}

.card-left-text {
  text-align: left;
  align-items: center;
  justify-content: center;
}

label {
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
}

.card-header {
  color: #999;
}

.card-body {
  color: #42b983;
}

.text-area-perserved {
  white-space: pre-wrap;
  height: 100%;
  width: 100%;
}

mark,
.mark {
  background-color: rgb(85, 79, 27) !important;
}

#upload-file {
  background-color: #328d64;
}

#file-chosen {
  margin-left: 0.3rem;
  font-family: sans-serif;
}

#edit-button {
  background-color: #34463e;
}

#submit-button {
  background-color: #328d64;
}
</style>
