<template>
  <div>
    <h3>{{ product.name }}</h3>
    <h5 class="brand">
      Brand:
      <router-link :to="{ path: '/search', query: { search: product.brand } }"
        ><button class="btn btn-link" @click="searchProduct(product.brand)">
          {{ product.brand }}
        </button></router-link
      >
    </h5>
    <p class="discount-price" v-if="product.discount">
      EGP
      {{ (product.price * (1 - product.discount / 100)).toFixed() }}
    </p>
    <p class="text-left">
      <span :class="product.discount ? 'price' : 'discount-price'"
        >EGP {{ product.price }}</span
      >
      <span class="discount" v-if="product.discount"
        >-{{ product.discount }}%</span
      >
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["product"],
  methods: {
    ...mapActions(["searchProduct"]),
  },
};
</script>

<style lang="scss" scoped>
.discount-price {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-align: left;
}
.brand {
  .btn {
    color: #d35400;
    margin: 0;
    padding: 0;
    font-size: 20px;
    text-transform: capitalize;
  }
}
.price {
  font-size: 18px;
  font-weight: 600;
  color: #ccc;
  text-decoration: line-through;
  text-align: left;
}
.discount {
  text-align: left;
  margin-left: 10px;
  font-size: 16px;
  color: #d35400;
  background-color: rgba(230, 126, 34, 0.3);
  padding: 5px 10px;
}
</style>