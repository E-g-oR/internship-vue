<template>
  <a class="waves-effect waves-dark" :class="color + ' ' + type"
    ><i class="material-icons left">{{ icon }} </i>{{ text }}
  </a>
</template>

<script>
export default {
  props: ["text", "icon", "color", "type"],
  name: "Button",
};
</script>