<template>
  <div>
    <form @submit="onSubmit">
      <p>Tech/Lang</p>
      <input type="text" v-model="language" placeholder="Type a technology or language" />
      <p>Location</p>
      <input type="text" v-model="location" placeholder="Type the desired location" />
      <input type="submit" value="FIND" />
    </form>
    <p v-if="searchResults">{{searchResults}} Total Results</p>
    <button @click="handlePrevious">PREVIOUS</button>
    <button @click="handleNext">NEXT</button>
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
  props: ["fetchLogins", "searchResults", "nextPage", "previousPage", "resetPage"],
};
</script>
<style>
form {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
}
input[type="submit"] {
  background: #0275d8;
  border: 1px solid #0275d8;
  box-sizing: border-box;
  border-radius: 4px;
  color: #fff;
}
</style>