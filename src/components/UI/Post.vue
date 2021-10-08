<template>
  <div
    class="post card grey lighten-5"
    :class="{ favorite: post.isFavorite, added: !post.userId }"
  >
    <div
      class="card-content waves-effect waves-dark black-text"
      @click="$emit('postClick', post)"
    >
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
  emits: ["postClick"],
  methods: {
    addToFavorites() {
      this.$store.dispatch("addToFavorites", this.post.id);
    },
  },
  components: { Button },
};
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
}
.card-content {
  flex: 1 1 auto;
}
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
