<template>
  <div
    class="favorite-cards-container wrapper z-depth-2"
    aria-label="favorite cards container"
  >
    <div v-if="favoritePosts" class="favorites-wrapper">
      <post
        v-for="post in favoritePosts"
        :key="post.id"
        :post="post"
        @postClick="logPost"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Post from "./UI/Post.vue";
export default {
  components: { Post },
  name: "favorite-cards-container",
  computed: mapGetters(["favoritePosts"]),
  methods: {
    logPost(post) {
      this.$emit("postClicked", post);
    },
  },
};
</script>

<style>
.favorite-cards-container {
  border: 2px solid #4caf50;
  grid-area: 1 / 3 / 3 / 4;
  overflow: auto;
}
@media screen and (max-width: 830px) {
  .favorite-cards-container {
    grid-area: 3 / 1 / 4 / 3;
  }
}
</style>
