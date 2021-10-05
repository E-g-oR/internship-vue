<template>
  <div class="modal-backdrop" :class="{ open: isModalOpen }">
    <div class="new-post-modal card grey lighten-5 z-depth-5">
      <div class="card-content black-text">
        <span class="post__title card-title">Create new post</span>
        <div class="row"></div>
        <form>
          <div class="input-field">
            <input id="post-title" type="text" />
            <label class="active" for="post-title">Post title</label>
          </div>
          <div class="input-field">
            <textarea id="post-body" class="materialize-textarea"></textarea>
            <label for="post-body">Post body</label>
          </div>
        </form>
      </div>
      <div class="card-action">
        <Button text="Confirm" color="deep-purple accent-3" type="btn" />
        <Button
          @click="closeForm"
          text="Cancel"
          color="black-text"
          type="btn-flat"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./UI/Button.vue";
export default {
  props: ["isModalOpen"],
  components: { Button },
  name: "PopupForm",
  methods: {
    closeForm() {
      this.$emit("closeForm");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  transition: 0.2s;
  /* opacity: 0;
  visibility: hidden; */
}
.modal-backdrop.open {
  opacity: 1;
  visibility: visible;
}
.new-post-modal .btn {
  margin-right: 2rem;
}

/* .new-post-modal {
  display: none;
} */

.new-post-modal.open {
  display: block;
}

.new-post-modal .input-field input[type="text"]:focus + label {
  color: #4527a0;
}
.new-post-modal .input-field input[type="text"]:focus {
  border-bottom: 1px solid #4527a0;
  box-shadow: 0 1px 0 0 #4527a0;
}
.new-post-modal .input-field textarea:focus + label {
  color: #4527a0;
}
.new-post-modal .input-field textarea:focus {
  border-bottom: 1px solid #4527a0;
  box-shadow: 0 1px 0 0 #4527a0;
}
</style>