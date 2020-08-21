<template>
  <div class="card" v-if="Object.keys(card).length > 0">
    <p>{{card.name}}</p>
    <img :src="card.avatar_url" />
    <span>{{card.bio}}</span>
    <h5>{{card.followers}} Followers</h5>
    <h5>{{card.public_repos}} Repositories</h5>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["username", "setCardInfo"],
  data() {
    return {
      card: {}
    };
  },
  async mounted() {
    this.card = await this.setCardInfo(this.username);
  },
};
</script>

<style>
</style>