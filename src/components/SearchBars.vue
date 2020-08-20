<!-- PREVENT DEFAULT -->

<template>
  <div>
    <form>
      <p>Tech/Lang</p>
      <input type="text" name id placeholder="Type a technology or language" />
      <p>Location</p>
      <input type="text" name id placeholder="Type the desired location" />
      <input type="submit" value="FIND" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBars",
};
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
}
input[type="submit"] {
  background: #0275d8;
  border: 1px solid #0275d8;
  box-sizing: border-box;
  border-radius: 4px;
  color: #fff;
}
</style>