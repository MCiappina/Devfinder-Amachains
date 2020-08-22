<template>
  <div class="main-container">
    <div class="header">
      <h1>Devfinder</h1>
      <p>Find relevant developers from Github</p>
    </div>
    <div class="main">
      <SearchBars
        :fetchLogins="fetchLogins"
        :searchResults="searchResults"
        :nextPage="nextPage"
        :previousPage="previousPage"
        :resetPage="resetPage"
      />
      <CardList :loginList="loginList" :setCardInfo="setCardInfo" />
    </div>
  </div>
</template>

<script>
import CardList from "./CardList";
import SearchBars from "./SearchBars";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      loginList: [],
      page: 1,
      searchResults: undefined,
    };
  },
  components: {
    SearchBars,
    CardList,
  },
  methods: {
    // HTTP Request Methods
    fetchLogins(language, location) {
      axios
        .get(
          `https://api.github.com/search/users?q=location:${location}+language:${language}&sort=followers&order=desc&page=${this.page}&per_page=8`,
          {
            headers: {
              Authorization: "token fb64a7582f3ff1b36fd3cfca68123eb76a923acf",
            },
          }
        )
        .then((res) => {
          this.searchResults = res.data.total_count;
          this.loginList = res.data.items.map((item) => {
            return { login: item.login, id: item.id };
          });
        });
    },
    async setCardInfo(login) {
      const response = await axios.get(
        `https://api.github.com/users/${login}`,
        {
          headers: {
            Authorization: "token fb64a7582f3ff1b36fd3cfca68123eb76a923acf",
          },
        }
      );
      return response.data;
    },

    // Pagination methods
    nextPage() {
      const maxPages = this.searchResults / 8;
      if (this.page < maxPages) this.page++;
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    resetPage() {
      this.page = 1;
    },
  },
};
</script>

<style scoped>
.main-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #333333;
  color: #ffffff;
}
.header {
  margin-top: 10vh;
  padding: 0.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10vh;
}
.header h1 {
  font-size: 2rem;
}
.header p {
  font-size: 1.2rem;
  font-weight: normal;
}
</style>