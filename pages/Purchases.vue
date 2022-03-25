<template>
  <div class="container">
    <Header />
    <div class="px-2 grid-container mt-5">
      <ProductCard
        v-for="product in purchasedProducts"
        :key="product.id"
        :product="product"
        :buyOrSellProduct="sellProduct"
        :buttonName="'Sell'"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("profile", ["purchasedProducts"]),
  },

  methods: {
    ...mapActions({
      sellProductAct: "profile/sellProductAct",
    }),

    //  Sell a product
    sellProduct(product) {
      this.sellProductAct(product);
    },
  },
};
</script>