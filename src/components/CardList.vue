<template>
  <div class="container">   
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
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>