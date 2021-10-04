<template>
  <div class="post card grey lighten-5">
    <div class="card-content black-text">
      <span class="post__title card-title">{{ post.title }}</span>
      <p class="post__body">{{ post.body }}</p>
    </div>
    <div class="card-action">
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  props: ["post"],
  components: { Button },
  name: "Post",
};
</script>