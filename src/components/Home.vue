<template>
  <div>
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
    fetchLogins(language, location) {
      axios
        .get(
          `https://api.github.com/search/users?q=location:${location}+language:${language}&sort=followers&order=desc&page=${this.page}&per_page=8`,
          {
            headers: {
              Authorization: "7c213fed160511d20ec377663fef274c6073ed2e",
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
            Authorization: "7c213fed160511d20ec377663fef274c6073ed2e",
          },
        }
      );
      return response.data;
    },

    // Pagination methods
    nextPage() {
      const maxPages = this.searchResults / 8 + 1;
      if (this.page < maxPages) this.page++;
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    resetPage() {
      this.page = 1;
    }
  },
};
</script>

<style scoped>
.header {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
</style>