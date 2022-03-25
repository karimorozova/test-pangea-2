<template>
  <div
    class="
      flex
      justify-between
      items-center
      w-screen
      px-3
      bg-lightgrey
      border-1 border-solid border-grey
      rounded-sm
    "
  >
    <div class="flex">
      <nuxt-link to="/" class="text-decoration-none">Profile</nuxt-link>
      <nuxt-link to="/shop" class="ml-sm text-decoration-none"
        >Products</nuxt-link
      >
      <nuxt-link to="/purchases" class="ml-sm text-decoration-none"
        >Purchases</nuxt-link
      >
    </div>
    <p class="font-bold">Money: ${{ money }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState("profile", ["money"]),
  },
};
</script>