<template>
  <div
    class="all-cards-container wrapper z-depth-2"
    aria-label="all cards container"
  >
    <div class="all-posts" v-if="allPosts">
      <post
        v-for="post in allPosts"
        :post="post"
        :key="post.id"
        @postClick="logPost"
      />
    </div>
    <Preloader v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Post from "./UI/Post.vue";
import Preloader from "./UI/Preloader.vue";
export default {
  name: "all-cards-container",
  computed: mapGetters(["allPosts"]),
  async mounted() {
    this.$store.dispatch("fetchPosts");
  },
  methods: {
    logPost(post) {
      this.$emit("postClicked", post);
    },
  },
  components: { Post, Preloader },
};
</script>

<style>
.all-cards-container {
  border: 2px solid #f44336;
  grid-area: 1 / 1 / 2 / 3;
  overflow: auto;
  /* grid-row-gap: 25px; */
}
.all-cards-container .all-posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
}
@media screen and (max-width: 550px) {
  .all-cards-container .all-posts {
    grid-template-columns: 1fr;
  }
}
</style>
