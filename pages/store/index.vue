<template>
  <div class="container-fluid">
    <h3 class="text-center font-bold"></h3>
    <products-list :products="products" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      products: "products",
    }),
  },
};
</script>

<style>
</style>