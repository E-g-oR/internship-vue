<template>
  <div class="modal-backdrop" :class="{ open: isModalOpen }">
    <form
      class="new-post-modal card grey lighten-5 z-depth-5"
      @submit.prevent="submitForm"
    >
      <div class="card-content black-text">
        <span class="post__title card-title">Create new post</span>
        <div class="row"></div>
        <form>
          <div class="input-field">
            <input v-model="title" id="post-title" type="text" />
            <label class="active" for="post-title">Post title</label>
          </div>
          <div class="input-field">
            <textarea
              v-model="body"
              id="post-body"
              class="materialize-textarea"
            ></textarea>
            <label for="post-body">Post body</label>
          </div>
        </form>
      </div>
      <div class="card-action">
        <Button
          type="submit"
          text="Confirm"
          color="deep-purple accent-3"
          look="btn"
        />
        <Button
          @click="closeForm"
          text="Cancel"
          color="black-text"
          look="btn-flat"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Button from "./UI/Button.vue";
export default {
  name: "PopupForm",
  props: ["isModalOpen"],
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    ...mapMutations(["addNewPost"]),
    closeForm() {
      this.$emit("closeForm");
    },
    createPost(title, body) {
      return {
        title: title,
        body: body,
        userId: 0,
        isFavorite: false,
        id: Date.now(),
      };
    },
    validateForm(title, body) {
      if (title.trim() !== "" && body.trim() !== "") {
        return true;
      }
      return false;
    },
    submitForm() {
      const title = this.title;
      const body = this.body;
      if (this.validateForm(title, body)) {
        const newPost = this.createPost(title, body);
        this.addNewPost(newPost);
        this.closeForm();
      }
    },
  },
  components: { Button },
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
}
.modal-backdrop.open {
  opacity: 1;
  visibility: visible;
}
.new-post-modal .btn {
  margin-right: 2rem;
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