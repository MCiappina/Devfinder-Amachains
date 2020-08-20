<template>
  <div class="container">
    <h1>CardList</h1>
    <div class="card" v-for="card in allCards" :key="card.id">
        <p>{{card.name}}</p>
        <img :src="card.image" />
        <span>{{card.bio}}</span>
        <h5>{{card.followers}} Followers</h5>
        <h5>{{card.repositories}} Repositories</h5>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "CardList",
  computed: mapGetters(['allCards'])
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