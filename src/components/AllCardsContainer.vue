<template>
  <div
    class="all-cards-container wrapper z-depth-2"
    aria-label="all cards container"
  >
    <div class="all-posts" v-if="allPosts">
      <post v-for="post in allPosts" :post="post" :key="post.id" />
    </div>
  </div>
</template>

<script>
import Post from "./UI/Post.vue";
export default {
  data() {
    return {
      allPosts: null,
    };
  },
  components: { Post },
  name: "all-cards-container",
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => (this.allPosts = data));
  },
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
</style>