<template>
  <div id="app">
    <Header />
    <SearchBars />
  </div>
</template>

<script>
import Header from './components/Header';
import SearchBars from './components/SearchBars';

export default {
  name: 'App',
  data() {
    cards: [
      {
      name: 'Cerjo',
      image: './assets/placeholder_image.png',
      location: 'São Paulo',
      bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followers: 20,
      repositories: 132 
    },
    {
      name: 'Dani',
      image: './assets/placeholder_image.png',
      location: 'São Paulo',
      bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followers: 20,
      repositories: 132 
    },
    {
      name: 'Vito',
      image: './assets/placeholder_image.png',
      location: 'Londres',
      bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      followers: 20,
      repositories: 132 
    },
    ]
  },
  components: {
    Header, SearchBars
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
