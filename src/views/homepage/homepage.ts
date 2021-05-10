import { Component, Vue } from "vue-property-decorator";
import axios from "axios"
import NewPost from "@/views/homepage/components/new-post/new-post.vue"

// @Component
// export default class HomePage extends Vue {
  // this.$store.commit('increment')

  // check = 'asdadsas'
//
// }

export default {
  components: {
    NewPost
  },
  data() {
    return {
      check: 'asd!!',
      posts: 'asd'

    }
  },
  methods: {
    increment(check: any) {
      // this.check = 'asdwwww'
      console.log(
        'asdas',
        // check,
      );
      // this.posts

    },




  },


  computed: {
    allPosts(): Array<number> {
      return this.$store.getters.allPosts
    },
    myData(): void {
      // return this.$store
      console.log(
        999
      );
    }
  },
  async mounted() {
    // this.check = 'mounted'
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    // const posts =
    this.$store.dispatch('getPosts')



  }
}