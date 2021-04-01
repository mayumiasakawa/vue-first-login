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
    <div
    v-for="post in posts"
    :key="post.name"
    >
   <br>
   <div>名前：{{ post.fields.name.stringValue }}</div>
   <div>コメント：{{ post.fields.comment.stringValue }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      name:"",
      comment:"",
      posts: []
    };
  },
  created(){
    axios.get(
      'https://firestore.googleapis.com/v1/projects/vue-first-login/databases/(default)/documents/comments',
    )
    .then(response => {
      this.posts = response.data.document;
    });
  },

  methods: {
    createComment(){
      axios
        .post(
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
      );
      this.name = "";
      this.comment = "";
    }
  }
};
</script>

<style>
</style>
