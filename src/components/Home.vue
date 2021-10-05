<template>
  <div class="home">
    <transition name="fade">
      <popup-form v-if="isModalOpen" @closeForm="closePopupForm" />
    </transition>
    <all-cards-container />
    <card-details />
    <favorite-cards-container />
    <Button
      icon="add"
      look="fixed-action-btn btn-floating btn-large"
      color="deep-purple accent-3"
      @click.prevent="isModalOpen = true"
    />
  </div>
</template>

<script>
import AllCardsContainer from "./AllCardsContainer.vue";
import FavoriteCardsContainer from "./FavoriteCardsContainer.vue";
import CardDetails from "./CardDetails.vue";
import PopupForm from "./PopupForm.vue";
import Button from "./UI/Button.vue";
export default {
  data: () => ({
    isModalOpen: false,
  }),
  name: "home",
  components: {
    AllCardsContainer,
    FavoriteCardsContainer,
    CardDetails,
    PopupForm,
    Button,
  },
  methods: {
    closePopupForm() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style>
.home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50vh 30vh;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
}
.fixed-action-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
@media screen and (max-width: 830px) {
  .home {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 60vh 30vh 40vh;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.v-enter-from {
  opacity: 0;
  visibility: hidden;
}
.v-enter-to {
  opacity: 1;
  visibility: visible;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>