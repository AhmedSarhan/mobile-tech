<template>
  <div class="container">
    <h3 v-if="cartCount > 0" class="my-4 text-center">
      You have {{ cartCount }} products in Cart
    </h3>
    <h3 v-if="cartCount === 0" class="my-5 text-center">
      Your Cart is Empty please Go Back to the
      <router-link :to="'/store'">store</router-link> to buy something
    </h3>
    <div class="row" v-if="cartCount > 0">
      <div class="col-md-4 order-md-2">
        <router-link :to="'/checkout'" class="btn btn-custom-primary"
          >Continue to Checkout</router-link
        >
        <cart-finances :total="totalPrice" :cart="true" />
        <cart-coupon />
      </div>
      <div class="col-md-8 order-md-1">
        <div v-for="product in cartProducts" :key="product.id">
          <cart-product-card :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      couponValue: 0,
    };
  },
  computed: {
    ...mapGetters(["cartCount", "totalPrice"]),
    ...mapState(["cartProducts"]),
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  margin: 20px auto;
  font-weight: 600;
  font-size: 20px;
  text-transform: capitalize;
}
</style>