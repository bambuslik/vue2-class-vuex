<template>
  <div class="">
    <p>home page</p>
    <ul>
      <li>
        <router-link to="/login">login (auth layout)</router-link>
      </li>
      <li>
        <router-link to="/security">security (profile layout)</router-link>
      </li>
      <li>
        <router-link to="/settings">settings (profile layout)</router-link>
      </li>
    </ul>
<!--    <p>state counter: <span>{{ // store.state.count }}</span></p>-->
    <p>{{ check }}</p>
    <h2>новый пост</h2>
    <NewPost></NewPost>
    <h2>Посты</h2>
    <ul>
      <li v-for="(post, key) in allPosts" :key="key">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <button @click="increment('asdasd')">ok</button>

  </div>
</template>

<script lang="ts" src="./homepage.ts"></script>


<style src="./homepage.css"></style>
