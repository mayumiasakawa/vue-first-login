<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input
      id="name"
      type="text"
      v-model="name">
    <br><br>
    <button @click="createComment">
      コメントをサーバーに送る
    </button>
    <label for="comment">コメント：</label>
    <textarea
      id="comment"
      v-model="comment"
    ></textarea>
    <h2>掲示板</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      name:"",
      returun:""
    }
  },
  created(){
    axios.get(
      'https://firestore.googleapis.com/v1/projects/vue-first-login/databases/(default)/documents/comments',
    )
    .then(response => {
      console.log(response);
    });
  },

  methods: {
    createComment(){
      axios.post(
        'https://firestore.googleapis.com/v1/projects/vue-first-login/databases/(default)/documents/comments',
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }  
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      this.name = "";
      this.comment = "";
    }
  }
}
</script>

<style>
</style>
