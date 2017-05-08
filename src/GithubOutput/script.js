import bus from '../bus';
import Vue from 'vue';

export default {
  name: 'GithubOutput',
  data() {
    return {
      currentUsername: null,
      githubData: {}
    }
  },
  created() {
    bus.$on('new-username', this.onUsernameChange)
  },
  destroyed() {
    bus.$off('new-username', this.onUsernameChange)
  },
  methods: {
    onUsernameChange(name) {
      this.currentUsername = name;
      this.fetchGithubData(name);
    },
    fetchGithubData(name) {
      // 既に格納されているなら何もしない
      if (this.githubData.hasOwnProperty(name)) return;

      const url = `https://api.github.com/users/${name}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(`${name} の id は ${data.id}`);
          Vue.set(this.githubData, name, data);
        })
    }
  }
}