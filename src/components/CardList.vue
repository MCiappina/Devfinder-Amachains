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
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
@media only screen and (max-width: 845px){
  .container {
    flex-direction: column;
    align-items: center;
  }
}
</style>