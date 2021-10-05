<template>
  <div
    class="post card grey lighten-5"
    :class="{ favorite: post.isFavorite, added: !post.userId }"
  >
    <div class="card-content black-text">
      <span class="post__title card-title">{{ post.title }}</span>
      <p class="post__body">{{ post.body }}</p>
    </div>
    <div class="card-action">
      <Button
        @click="addToFavorites"
        :icon="post.isFavorite ? 'favorite' : 'favorite_border'"
        color="deep-purple accent-3"
        look="btn-floating"
      />
    </div>
  </div>
</template>

<script>
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
.post.added {
  border: 2px solid #311b92;
}
.post.favorite button {
  background-color: #f57f17 !important;
}
</style>