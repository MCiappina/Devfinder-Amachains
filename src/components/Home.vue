<template>
  <div class="main-container">
    <div class="header">
      <img class="logo" src="../assets/searchImage.svg" />
      <h1>Devfinder</h1>
      <p>Find relevant developers from Github</p>
    </div>
    <div class="main">
      <SearchBars
        :fetchLogins="fetchLogins"
        :nextPage="nextPage"
        :previousPage="previousPage"
        :resetPage="resetPage"
        :toggleSort="toggleSort"
        :searchResults="searchResults"
        :sortArrow="sortArrow"
        :page="page"
        :maxPages="maxPages"
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
      maxPages: undefined,
      searchResults: undefined,
      sortOrder: "asc",
      sortArrow: "↑",
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
          `https://api.github.com/search/users?q=location:${location}+language:${language}&sort=followers&order=${this.sortOrder}&page=${this.page}&per_page=8`,
          {
            headers: {
              Authorization: process.env.VUE_APP_GITHUB_TOKEN,
            },
          }
        )
        .then((res) => {
          console.log(res.data.items);
          this.searchResults = res.data.total_count;
          this.maxPages = this.searchResults / 8;
          this.loginList = res.data.items.map((item) => {
            return { login: item.login, id: item.id };
          });
        })
        .catch((err) => console.log(err));
    },
    async setCardInfo(login) {
      const response = await axios.get(
        `https://api.github.com/users/${login}`,
        {
          headers: {
            Authorization: process.env.VUE_APP_GITHUB_TOKEN,
          },
        }
      );
      return response.data;
    },

    // Pagination methods
    nextPage() {
      if (this.page < this.maxPages) this.page++;
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    resetPage() {
      this.page = 1;
    },
    //Toggle Method
    toggleSort() {
      if (this.sortOrder === "asc") {
        this.sortOrder = "desc";
        this.sortArrow = "↓";
      } else {
        this.sortOrder = "asc";
        this.sortArrow = "↑";
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #333333;
  color: #ffffff;
}
.logo {
  height: 100px;
}
.header {
  margin-top: 20vh;
  padding: 0.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20vh;
}
.header h1 {
  font-size: 2rem;
}
.header p {
  font-size: 1.2rem;
  font-weight: normal;
}
@media only screen and (max-width: 845px){
  .logo {
    display: none;
  }
  .header {
    margin-top: 15vh;
    height: 10vh;
  }

}
</style>