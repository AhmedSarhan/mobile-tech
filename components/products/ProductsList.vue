<template>
  <div class="row">
    <div
      class="col-md-3 col-sm-2"
      v-for="product in products"
      :key="product.id"
    >
      <product-card :product="product" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>

<style>
</style>