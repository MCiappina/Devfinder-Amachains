<template>
  <a :href="card.html_url" target="_blank">
    <div class="card" v-if="Object.keys(card).length > 0">
      <p>{{card.name}}</p>
      <img :src="card.avatar_url" />
      <span>{{card.bio}}</span>
      <h5>{{card.followers}} Followers</h5>
      <h5>{{card.public_repos}} Repositories</h5>
    </div>
  </a>
</template>

<script>
export default {
  name: "Card",
  props: ["username", "setCardInfo"],
  data() {
    return {
      card: {},
    };
  },
  async created() {
    this.card = await this.setCardInfo(this.username);
  },
};
</script>

<style scoped>
.card {
    margin: 20px;
    background-color: #ffffff;
    color: #333333;
    width: 7rem;
    height: 15rem;
}
img {
    max-width: 100px;
    height: auto;
}
</style>