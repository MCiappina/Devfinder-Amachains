<template>
  <div class="container">
    <h1>CardList</h1>    
    <div class="card" v-for="card in cards" :key="card.id">
        <p>{{card.name}}</p>
        <img :src="card.avatar" />
        <span>{{card.bio}}</span>
        <h5>{{card.followers}} Followers</h5>
        <h5>{{card.repositories}} Repositories</h5>
    </div>
  </div>
</template>

<script>

export default {
  name: "CardList",
  props: ['cards'],
};
</script>

<style>
.container {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
}
.card {
    margin: 10px;
    padding: 10px;
}
img {
    max-width: 100px;
    height: auto;
}
</style>