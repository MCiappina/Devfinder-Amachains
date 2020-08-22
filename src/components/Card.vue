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
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  background: #F5F5F5;
  width: 16rem;
  height: 26rem;
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
  border-top: 1px solid #333333;
}
.card-location {
  font-size: 1.3rem;
  padding: 4px;
  font-weight: bold;
}
.card-bio {
  padding: 10px;
  font-size: 0.7rem;
  text-align: center;
}
.card-info {
  display:flex;
  justify-content: space-between;
  padding: 10px;
}
.card-info h5{
  margin: 0 10px;
}
img {
  width: 100%;
  height: 200px;
}
</style>