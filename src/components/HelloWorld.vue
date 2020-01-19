<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <input type="file" accept="image/jpeg,image/png" @change="uploadFile($event);">
        <!--<b-form-input 
           v-model="teamAPlayer"
           placeholder="Enter player's name"></b-form-input>-->
        <!--<button @click="uploadFile">Test</button>-->
        <img src="../assets/samuraiLogo.png" />
        <div>
            <b-button variant="info" size="lg" @click="initialiseGamePlay">Play</b-button>
        </div>
    </div>
</template>

<script>
    //import storage from "../store/db.js";
    import * as firebase from "firebase";

    const db = firebase
        .initializeApp({ storageBucket: "samurai-e00ed.appspot.com" })
        .storage();

    export default {
        name: "HelloWorld",
        props: {
            msg: String
        },
        methods: {
            initialiseGamePlay() {
                this.$store.dispatch("initialiseGame");
            },
            uploadFile(e) {
                //console.log("upload file called with value");
                const file = e.target.files[0];
                //console.log(file);
                db.ref('images/' + file.name).put(file)
                    .then(response => {
                        console.log(response)
                    })
                    .catch(err => console.log(err))
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
</style>
