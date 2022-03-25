<template>
  <div class="container relative">
    <Header />
    <div class="px-2 grid-container mt-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @openProductForm="openProductForm"
        @deleteProduct="deleteProduct"
        :buyOrSellProduct="buyProduct"
        :buttonName="'Buy'"
      />
    </div>
    <div
      class="px-2 mt-5 text-xl text-lightgrey cursor-pointer"
      @click="openProductForm()"
    >
      <span class="iconify" data-icon="bi:plus-square"></span>
    </div>
    <ProductForm
      v-if="formOpened"
      :productToBeEdited="productToBeEdited"
      @createProduct="createProduct"
      @editProduct="editProduct"
      @closeProductForm="closeProductForm"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import ProductForm from "../components/ProductForm.vue";

export default {
  components: {
    ProductCard,
    ProductForm,
  },
  data: () => {
    return {
      formOpened: false,
      productToBeEdited: null,
    };
  },
  computed: {
    ...mapState("profile", ["money"]),
    ...mapState("shop", ["products"]),
  },
  methods: {
    ...mapActions({
      createProductAct: "shop/createProductAct",
      editProductAct: "shop/editProductAct",
      deleteProductAct: "shop/deleteProductAct",
    }),
    ...mapActions({
      buyProductAct: "profile/buyProductAct",
    }),

    //  Create a new product
    createProduct(product) {
      this.createProductAct(product);
    },

    //  Delete a product
    deleteProduct(id) {
      this.deleteProductAct(id);
    },

    //  Update a product
    editProduct(product) {
      this.editProductAct(product);
    },

    //  Buy a product
    buyProduct(product) {
      if (this.money > product.price) {
        this.buyProductAct(product);
      } else {
        alert("Your balance is not enough.");
      }
    },

    //  Open the form of a product
    openProductForm(product = null) {
      if (product) {
        this.productToBeEdited = { ...product };
      }
      this.formOpened = true;
    },

    //  Close the form
    closeProductForm() {
      this.productToBeEdited = null;
      this.formOpened = false;
    },
  },
};
</script>