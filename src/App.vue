<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;
  background: #333333
}
</style>
