import { Module } from "vuex";
import axios from "axios";

export default {
  state: {
    posts: []
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }

  },
  actions: {
    async getPosts(ctx) {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        ctx.commit('updatePosts', res.data)
      }
      catch(err) {
        console.log(
          'ERROR mofo!!', err
        );
      }
    }
  },
  getters: {
    allPosts(state: any): Array<number> {
      return state.posts
    }
  }
}