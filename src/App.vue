<template>
  <div class="container"><home /></div>
</template>

<script>
import home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    home,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
}
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
}
.wrapper {
  padding: 1.7rem;
}
</style>
