<template>
  <div class="home">
    <all-cards-container />
    <card-details />
    <favorite-cards-container />
    <a
      class="
        waves-effect waves-light
        btn-floating btn-large
        deep-purple
        accent-4
      "
    >
      <i class="large material-icons">mode_edit</i>
    </a>
  </div>
</template>

<script>
import AllCardsContainer from "./AllCardsContainer.vue";
import FavoriteCardsContainer from "./FavoriteCardsContainer.vue";
import CardDetails from "./CardDetails.vue";
export default {
  name: "home",
  components: {
    AllCardsContainer,
    FavoriteCardsContainer,
    CardDetails,
  },
};
</script>

<style>
.home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50vh 30vh;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
}
</style>