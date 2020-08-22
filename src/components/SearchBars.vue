<template>
  <div>
    <form @submit="onSubmit">
      <p>Tech/Lang</p>
      <input type="text" v-model="language" placeholder="Type a technology or language" required />
      <p>Location</p>
      <input type="text" v-model="location" placeholder="Type the desired location" required />
      <input type="submit" value="FIND" />
    </form>
    <div class="btn-container" v-if="searchResults">
      <div class="pagination">
        <button class="previous" v-if="this.page !== 1" @click="handlePrevious">PREVIOUS</button>
        <button class="next" v-if="this.page < this.maxPages" @click="handleNext">NEXT</button>
      </div>
      <button @click="handleToggle">Followers {{this.sortArrow}}</button>
    </div>
    <p class="search-results" v-if="searchResults">{{searchResults}} Total Results</p>
    <p class="search-results" v-if="!searchResults && submitted">0 Total Results</p>
  </div>
</template>

<script>
export default {
  name: "SearchBars",
  data() {
    return {
      language: "",
      location: "",
      submitted: false
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.submitted = !this.submitted;
      this.resetPage();
      this.fetchLogins(this.language, this.location);
    },
    handleNext() {
      this.nextPage();
      this.fetchLogins(this.language, this.location);
    },
    handlePrevious() {
      this.previousPage();
      this.fetchLogins(this.language, this.location);
    },
    handleToggle() {
      this.toggleSort();
      this.resetPage();
      this.fetchLogins(this.language, this.location);
    },
  },
  props: [
    "fetchLogins",
    "searchResults",
    "nextPage",
    "previousPage",
    "resetPage",
    "toggleSort",
    "sortArrow",
    "page",
    "maxPages"
  ],
};
</script>
<style>
form {
  display: flex;
  flex-direction: column;
  width: 580px;
  margin: 0 auto;
}
form p {
  font-size: 1rem;
  margin: 0.4rem 0;
}
input[type="text"] {
  background: #ffffff;
  border-radius: 4px;
  height: 1.2rem;
  color: #999999;
  padding: 7px;
  font-weight: bold;
  font-size: 0.8rem;
  margin: 0.4rem 0;
  outline: none;
}
input[type="submit"] {
  background: #0275d8;
  border: 1px solid #0275d8;
  box-sizing: border-box;
  border-radius: 4px;
  color: #fff;
  width: 4rem;
  align-self: center;
  text-align: center;
  padding: 0.5rem;
  margin: 0.8rem 0;
  cursor: pointer;
  outline: none;
}
.btn-container {
  margin: 0 4rem;
  display: flex;
  justify-content: space-between;
}
.search-results {
  margin: 0 4rem;
}
button {
  background: #ffffff;
  border: 1px solid #eceeef;
  box-sizing: border-box;
  border-radius: 10px;
  color: #0275d8;
  margin: 1rem 1rem 0.4rem 0;
  padding: 0.4rem;
  font-size: 0.7rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}
button:hover {
  color: #ffffff;
  background: #0275d8;
}
@media only screen and (max-width: 845px){
  input[type="text"]{
    width: 50%;
    align-self: center;
  }
  form {
    margin-top: 5vh;
  }
  form p {
    align-self: center;
  }
  .btn-container {
    width: 50%;
    margin: 0 auto;
  }
  .search-results {
    margin: 0 auto;
    text-align: center;
    margin-top: 2vh;
    width: 50%;
  }

}
</style>