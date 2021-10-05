<template>
  <div class="post card grey lighten-5" :class="{ favorite: post.isFavorite }">
    <div class="card-content black-text">
      <span class="post__title card-title">{{ post.title }}</span>
      <p class="post__body">{{ post.body }}</p>
    </div>
    <div class="card-action">
      <Button
        @click="addToFavorites"
        :text="post.isFavorite ? 'Remove' : 'Add to favorites'"
        :icon="post.isFavorite ? 'favorite' : 'favorite_border'"
        color="deep-purple accent-3"
        type="btn"
      />
    </div>
  </div>
</template>

<script>
// icon="favorite_border"

import Button from "./Button.vue";
export default {
  name: "Post",
  props: ["post"],
  methods: {
    addToFavorites() {
      this.$store.dispatch("addToFavorites", this.post.id);
    },
  },
  components: { Button },
};
</script>

<style>
.post.favorite {
  background-color: #fff59d !important;
}
</style>