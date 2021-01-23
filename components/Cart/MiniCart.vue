<template>
  <div class="dropdown-menu p-2" aria-labelledby="triggerId">
    <div class="mini-cart">
      <!-- all products !-->
      <div class="px-2" v-for="product in products" :key="product.id">
        <!-- single product !-->
        <div>
          <img
            :src="product.cover"
            style="width: 100%; margin: 5px 0; display: block"
          />
        </div>
        <div class="d-flex justify-content-between">
          <div>
            <strong>{{ product.name }}</strong>
            <br />
            {{ product.quantity }} x
            {{
              product.discount
                ? parseInt(
                    (product.price * (1 - product.discount / 100)).toFixed()
                  )
                : product.price
            }}
            Egp
          </div>
          <div>
            <button
              class="btn badge badge-secondary"
              @click.prevent="removeFromCart(product.id)"
            >
              Remove
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <span>Total Price: {{ totalPrice }} Egp</span>
      <router-link :to="'/cart'">Visit Cart</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["products"],
  methods: {
    ...mapActions({
      removeFromCart: "removeFromCart",
    }),
    goToCart() {
      this.$router.push("/cart");
    },
  },
  computed: {
    ...mapGetters({
      totalPrice: "totalPrice",
    }),
  },
  mounted() {
    let localCartProducts = [];
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  min-width: 320px;
  right: 0;
  left: auto;
}
button {
  outline: none;
  box-shadow: none;
  border-radius: 15px;
  &:focus {
    outline: none;
  }
}
.mini-cart {
  max-height: 75vh;
  overflow-y: scroll;
}
@media screen and (max-width: 500px) {
  .dropdown-menu {
    min-width: 100%;
    right: auto;
    left: auto;
    position: relative !important;
    margin-top: 10px;
  }
}
</style>