<template>
  <div id="app">
    <Header />
    <SearchBars />
    <CardList />
  </div>
</template>

<script>
import Header from './components/Header';
import SearchBars from './components/SearchBars';
import CardList from './components/CardList';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header, SearchBars, CardList
  },
  methods: {
    ...mapActions(['fetchCards'])
  },
  created() {
    this.fetchCards();
  }
    
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: inherit;
}
</style>
