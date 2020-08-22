<template>
  <div>
    <form @submit="onSubmit">
      <p>Tech/Lang</p>
      <input type="text" v-model="language" placeholder="Type a technology or language" required />
      <p>Location</p>
      <input type="text" v-model="location" placeholder="Type the desired location" required />
      <input type="submit" value="FIND" />
    </form>
    <div class="buttons" v-if="searchResults">
      <button @click="handlePrevious">PREVIOUS</button>
      <button @click="handleNext">NEXT</button>
      <p v-if="searchResults">{{searchResults || 0}} Total Results</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBars",
  data() {
    return {
      language: "",
      location: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
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
  },
  props: [
    "fetchLogins",
    "searchResults",
    "nextPage",
    "previousPage",
    "resetPage",
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
  margin: 0.4rem 0;
}
button {
  background: #ffffff;
  border: 1px solid #eceeef;
  box-sizing: border-box;
  border-radius: 15px;
  color: #0275D8;
  margin: 1rem 1rem 0.4rem 0;
  padding: 0.4rem;
}
</style>