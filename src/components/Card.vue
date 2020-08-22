<template>
  <a :href="card.html_url" target="_blank">
    <div class="card" v-if="Object.keys(card).length > 0">
      <div class="card-header">
        <p>{{card.name || 'Unnamed User'}}</p>
      </div>
      <div class="card-image">
        <img :src="card.avatar_url" />
      </div>
      <div class="card-location">
        <span>{{card.location}}</span>
      </div>
      <div class="card-bio">
        <span>{{card.bio}}</span>
      </div>

      <div class="card-info">
        <h5>{{card.followers}} Followers</h5>
        <h5>{{card.public_repos}} Repositories</h5>
      </div>
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
a {
  text-decoration: none;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background: #F5F5F5;
  width: 13rem;
  height: 24rem;
  text-decoration: none;
  border-radius: 4px;
  color: #333333; 
}
.card-header {
  padding: 1rem;
  font-size: 1rem;
}
.card-image {
  width: 100%;
  height: auto;
}
.card-location {
  font-size: 1.2rem;
  padding: 4px;
}
.card-bio {
  padding: 10px;
  font-size: 0.8rem;
}
.card-info {
  padding: 4px;
}
img {
  width: 100%;
  height: auto;
}
</style>