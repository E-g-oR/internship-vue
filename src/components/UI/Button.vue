<template>
  <button
    class="waves-effect waves-dark"
    :class="color + ' ' + look"
    :type="type"
  >
    <i v-if="icon" class="material-icons left">{{ icon }} </i>{{ text }}
  </button>
</template>

<script>
export default {
  props: ["text", "icon", "color", "look", "type"],
  name: "Button",
};
</script>