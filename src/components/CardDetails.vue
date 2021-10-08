<template>
  <div class="card-details wrapper z-depth-2">
    <div v-if="card" class="details">
      <Button
        icon="clear"
        look="btn-floating btn-flat btn-small"
        color="grey lighten-2"
        @click="clearPostInfo"
      />
      <h5>{{ card.title }}</h5>
      <p>{{ card.body }}</p>
      <i class="material-icons"
        >{{ card.isFavorite ? "favorite" : "favorite_border" }}
      </i>
    </div>
  </div>
</template>

<script>
import Button from "./UI/Button.vue";
export default {
  components: { Button },
  props: ["card"],
  name: "card-details",
  methods: {
    clearPostInfo() {
      this.$emit("clearDetails");
    },
  },
};
</script>

<style>
.card-details {
  border: 2px solid #ffeb3b;
  grid-area: 2 / 1 / 3 / 3;
}
</style>
