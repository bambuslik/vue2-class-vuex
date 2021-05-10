export default {
  name: "NewPost",
  data() {
    return {
      title: '',
      body: '',
    }
  },
  methods: {
    submit() {
      this.$store.commit('createPost', {'title': this.title, 'body': this.body})
      // console.log(
      //   this.title
      // );
    }
  }
}