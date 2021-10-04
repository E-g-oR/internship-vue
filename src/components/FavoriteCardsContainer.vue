<template>
  <div
    class="favorite-cards-container wrapper z-depth-2"
    aria-label="favorite cards container"
  ></div>
</template>

<script>
export default {
  name: "favorite-cards-container",
};
</script>

<style>
.favorite-cards-container {
  border: 2px solid #4caf50;
  grid-area: 1 / 3 / 3 / 4;
}
</style>