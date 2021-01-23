<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 my-5">
        <user-preview v-if="shownPart === 'preview'" />
        <user-orders v-else-if="shownPart === 'previous'" />
        <div v-else>
          Your have saved {{ wishListCount }} products in your wishlist
          <wish-list-product-card
            v-for="product in wishListProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
      <div class="col-md-4 my-5">
        <user-controls @changePreview="changePreview" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      shownPart: "preview",
    };
  },
  methods: {
    changePreview(payload) {
      this.shownPart = payload;
    },
  },
  computed: {
    ...mapState(["wishListProducts"]),
    wishListCount() {
      return this.wishListProducts.length;
    },
  },
};
</script>

<style>
</style>