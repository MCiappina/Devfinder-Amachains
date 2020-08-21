<template>
  <div class="container">
    <h1>CardList</h1>    
    <Card v-for="login in loginList" :key='login.id' :setCardInfo="setCardInfo" :username="login.login" />
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: "CardList",
  components: {Card},
  props: ['loginList', 'setCardInfo'],
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