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
export default {
  data(){
    return {
      name:"",
      returun:""
    }
  },
}
</script>

<style>
</style>
