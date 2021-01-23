<template>
  <div class="cart-finances my-3 bg-white">
    <h3>Cart Summary</h3>
    <div class="flex">
      <div>Total</div>
      <div>{{ total }} EGP</div>
    </div>
    <div class="flex">
      <div>Shipping Fees</div>
      <div>{{ shippingFees }} EGP</div>
    </div>
    <div class="flex">
      <div>
        Coupon Discount
        <p class="coupon" v-if="currentCoupon">
          <span class="remove" v-if="cart" @click="removeCouponHandler"
            ><i class="fa fa-times" aria-hidden="true"></i
          ></span>
          <span>{{ coupon.text }}</span>
        </p>
      </div>
      <div>
        {{ discountAmount }} EGP
        <span v-if="currentCoupon">(-{{ coupon.value }})%</span>
      </div>
    </div>
    <hr />
    <div class="flex">
      <div>GrandTotal</div>
      <div>{{ grandTotal }} EGP</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["total", "cart"],
  data() {
    return {
      shippingFees: 50,
    };
  },
  computed: {
    ...mapState({
      coupon: "validCoupon",
    }),

    grandTotal() {
      return (this.total + this.shippingFees - this.discountAmount).toFixed();
    },
    discount() {
      return this.currentCoupon ? this.coupon.value / 100 : 0;
    },
    discountAmount() {
      return (this.total * this.discount).toFixed();
    },
    currentCoupon() {
      if (process.client) {
        if (this.coupon.value > 0) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
  mounted() {
    // console.log(this.coupon);
  },

  methods: {
    ...mapActions(["setValidCoupon"]),
    removeCouponHandler() {
      this.setValidCoupon({
        text: "",
        value: 0,
      });
    },
  },
};
</script>

<style lang="scss">
.cart-finances {
  -webkit-box-shadow: 1px 1px 3px 3px rgba(196, 196, 196, 1);
  -moz-box-shadow: 1px 1px 3px 3px rgba(196, 196, 196, 1);
  box-shadow: 1px 1px 3px 3px rgba(196, 196, 196, 1);
  border-radius: 5px;

  h3 {
    background-color: #e67e22;
    color: #ffffff;
    padding: 8px 5px;
    font-size: 25px;
    font-weight: 600;
  }
  .flex {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 5px 10px;

    div:nth-child(odd) {
      color: #e67e22;
      font-size: 18px;
      font-weight: 600;
    }
    div:nth-child(even) {
      color: #000000;
      font-size: 18px;
      font-weight: normal;
    }
    &:last-of-type {
      padding-bottom: 5px;
    }
    .coupon {
      color: #ee5253;
      font-size: 16px;
      padding: 5px;

      .remove {
        cursor: pointer;
      }
    }
  }
}
</style>