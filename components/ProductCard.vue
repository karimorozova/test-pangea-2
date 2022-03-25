<template>
  <div class="border-1 border-solid border-success rounded-sm">
    <div
      class="w-screen flex justify-between items-center bg-lightsuccess px-1"
    >
      <p class="text-green">{{ product.name }}</p>
      <div v-if="buttonName == 'Buy'" class="flex items-center">
        <div @click="$emit('openProductForm', product)">
          <span class="iconify cursor-pointer" data-icon="ci:edit"></span>
        </div>
        <div @click="$emit('deleteProduct', product.id)">
          <span
            class="iconify ml-xs cursor-pointer"
            data-icon="bxs:trash-alt"
          ></span>
        </div>
      </div>
    </div>

    <div class="px-1 py-1">
      <div class="w-screen flex justify-between items-center">
        <p>Price: {{ product.price }}</p>
        <div
          class="
            p-xs
            text-white
            bg-success
            border-xs border-solid border-success
            rounded-sm
            cursor-pointer
          "
          @click="buyOrSellProduct(product)"
        >
          {{ buttonName }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product", "buyOrSellProduct", "buttonName"],
};
</script>