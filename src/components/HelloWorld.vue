<template>
  <div class="hello">
    <h1 class="mt-5">{{ msg }}</h1>
    <img src="../assets/samuraiLogo.png" />
    <div>
      <router-link class="btn btn-info" to="/select-team">Play</router-link>
    </div>
    <div class="upload">
      <input
        type="file"
        accept="image/jpeg,image/png"
        @change="uploadFile($event)"
        multiple
      />
    </div>
  </div>
</template>

<script>
//import storage from "../store/db.js";
import * as firebase from "firebase";
const axios = require("axios");

const db = firebase
  .initializeApp({ storageBucket: "samurai-e00ed.appspot.com" })
  .storage();

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.$store.dispatch("initialiseGame");
  },
  methods: {
    initialiseGamePlay() {
      this.$store.dispatch("initialiseGame");
    },
    async uploadFile(e) {
      this.$store.commit("useUserFiles");
      //console.log("upload file called with value");
      //var length = e.files.length;
      //console.log(length);
      //const file = e.target.files[0];
      //const file2 = e.target.files[1];
      //console.log(file);
      //console.log(file2);
      var list = [];
      for (var i = 0; i < 10; i++) {
        var name = e.target.files[i].name;
        console.log(name);
        await db
          .ref("images/" + name)
          .put(e.target.files[i])
          .then(response => {
            console.log(response);
          })
          .then(async () => {
            console.log(name);
            var temp = await db.ref("images/" + name).getDownloadURL();
            console.log("url is " + temp);
            list.push(temp);
            console.log(list);
          })
          .catch(err => console.log(err));
      }

      await axios({
        method: "post",
        url: "http://172.31.66.26:3000/sendimages",
        data: {
          url: list
        }
      })
        .then(function(response) {
          return response.data.tags;
        })
        .catch(function(error) {
          console.log(error);
          return -1;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  height: 30%;
  width: 30%;
}

.upload {
  margin-top: 20px;
}
</style>
