<template>
  <div class="container-fluid">
    <h3 class="text-center font-bold my-4">
      You Searched for {{ $route.query.search }}
    </h3>
    <products-list :products="products" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    let searchQuery = this.$route.query.search;
    // this.getSingleProduct(searchQuery);
    // console.log(searchQuery);
    // this.
  },
  methods: {
    ...mapActions(["searchProduct"]),
  },
  computed: {
    ...mapState({
      products: "searchProducts",
    }),
  },
};
</script>

<style>
</style>