<template>
  <form action="" class="post-form" @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title">
    <input type="text" placeholder="body" v-model="body">
    <input type="submit" value="Go!">
  </form>
</template>

<script lang="ts" src="./new-post.ts"></script>
<style src="./new-post.css"></style>