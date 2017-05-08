export default {
  name: 'GithubInput',
  data() {
    return {
      username: '',
    }
  },
  methods: {
    onSubmit(event) {
      alert(this.username);
    }
  }
}