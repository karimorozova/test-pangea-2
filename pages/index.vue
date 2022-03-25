<template>
  <div class="container">
    <Header />
    <p>Welcome {{ fullName }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/Header.vue";

export default {
  name: "profile",
  components: { Header },
  computed: {
    ...mapState("profile", ["fullName"]),
  },
};
</script>
