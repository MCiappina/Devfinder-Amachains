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
  font-style: normal;
  font-weight: normal;
}
.app {
  height: 100vh;
  width: 100vw;
  background: #333333;
}
</style>
