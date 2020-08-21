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
      />
      <CardList :cards="cards" />
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
      cardList: [],
      cards: [],
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
          `https://api.github.com/search/users?q=location:${location}+language:${language}&sort=followers&order=asc&page=${this.page}&per_page=8`,
          {
            headers: {
              Authorization: "991d05a85bc0be566cc6819f91afe5c2b3613fbd",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.searchResults = res.data.total_count;
          this.loginList = res.data.items.map((item) => item.login);
          console.log(this.loginList);
        })
        .catch((err) => console.log(err))
        .then(() => this.setCardInfo())
        .then(
          () =>
            (this.cards = this.cardList.sort(
              (a, b) => b.followers - a.followers
            ))
        );
    },
    setCardInfo() {
      let newCardsArray = [];
      this.cards = [];
      this.cardList = [];
      // Zera o state de cards e itera o array loginList fazendo um GET request e criando o objeto para o array cards
      this.loginList.forEach((login) =>
        axios
          .get(`https://api.github.com/users/${login}`, {
            headers: {
              Authorization: "991d05a85bc0be566cc6819f91afe5c2b3613fbd",
            },
          })
          .then((res) => {
            const user = res.data;
            const cardObject = {
              id: user.id,
              name: user.name,
              avatar: user.avatar_url,
              bio: user.bio,
              followers: user.followers,
              repositories: user.public_repos,
            };
            newCardsArray.push(cardObject);
          })
      );
      // Por causa da assincronicidade, alguns objetos, mesmo com mais seguidores, acabam ficando atrás na ordem do array
      // invoco um sort() em ordem descendente
      this.cardList = newCardsArray;
    },
    // Pagination methods
    nextPage() {
      const maxPages = (this.searchResults % 8) + 1;
      if (this.page < maxPages) this.page++;
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
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