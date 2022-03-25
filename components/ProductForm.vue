<template>
  <div class="absolute flex flex-col h-full justify-center top-0 w-full">
    <div class="w-full flex justify-center">
      <div class="w-30 border-1 border-solid border-grey px-2 py-2">
        <div class="flex justify-end">
          <div class="flex">
            <div
              class="
                p-xs
                text-white
                bg-success
                border-xs border-solid border-success
                rounded-sm
                cursor-pointer
                ml-xs
              "
              @click="saveProduct"
            >
              Save
            </div>
            <div
              class="
                p-xs
                text-white
                bg-success
                border-xs border-solid border-success
                rounded-sm
                cursor-pointer
                ml-xs
              "
              @click="$emit('closeProductForm')"
            >
              Close
            </div>
          </div>
        </div>
        <hr />
        <div class="mt-5">
          <div class="w-full flex justify-between items-center">
            <label for="name">Name: </label>
            <input id="name" name="name" v-model="name" class="font-2xl" />
          </div>
          <div class="w-full flex justify-between items-center mt-2">
            <label for="price">Price: </label>
            <input
              type="number"
              id="price"
              name="price"
              v-model="price"
              class="font-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductForm",
  props: ["productToBeEdited", "createProduct", "editProduct"],
  data: () => {
    return {
      name: "",
      price: "",
    };
  },
  methods: {
    saveProduct() {
      if (this.name && this.price) {
        if (this.productToBeEdited) {
          this.$emit("editProduct", {
            id: this.productToBeEdited.id,
            name: this.name,
            price: this.price,
          });
        } else {
          this.$emit("createProduct", {
            name: this.name,
            price: this.price,
          });
        }
        this.$emit("closeProductForm");
      } else {
        alert("The name and price of a product are required.");
      }
    },
    setProductData(product) {
      this.name = product.name;
      this.price = product.price;
    },
  },

  created() {
    if (this.productToBeEdited) {
      this.name = this.productToBeEdited.name;
      this.price = this.productToBeEdited.price;
    }
  },
};
</script>