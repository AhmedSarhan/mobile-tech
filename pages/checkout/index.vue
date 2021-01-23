<template>
  <div class="container">
    <div class="row my-3" v-if="cartCount > 0">
      <div class="col-md-4 my-5 order-md-2">
        <cart-finances :total="totalPrice" :cart="false" />
      </div>
      <div class="col-md-8 order-md-1">
        <user-form @confirmOrder="confirmOrderHandler" :checkout="true" />
      </div>
    </div>
    <div v-else class="my-5 text-center">
      <h3>
        You haven't Purchased anything yet. Please Go Back to the
        <router-link :to="'/store'">store</router-link> to buy something first
      </h3>
    </div>
    <modal :modalWidth="50" v-show="showModal" @close="closeModal">
      <div class="order-number">
        {{ orderNumber }}
      </div>
      <div class="text">
        <p>
          Your Order has been Confirmed you can now refer to
          <button class="btn btn-link" @click="finishCheckOutHandler">
            The profile page
          </button>
          to follow up with it
        </p>
        <p>
          Please Save The Order Number appearing in top with you, you will need
          it
        </p>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import moment from "moment";
export default {
  computed: {
    ...mapGetters(["cartCount", "totalPrice"]),
    ...mapState(["cartProducts", "validCoupon"]),
  },
  data() {
    return {
      showModal: false,
      orderNumber: undefined,
    };
  },
  methods: {
    ...mapActions(["setConfirmedOrders", "clearCart", "setValidCoupon"]),
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
    confirmOrderHandler(user) {
      let order = {};
      let shippingFees = 50;
      order.orders = this.cartProducts;
      if (this.validCoupon.value > 0) {
        let discountAmount = +(
          (this.validCoupon.value / 100) *
          this.totalPrice
        ).toFixed();
        order.coupon = this.validCoupon;
        order.paidTotal = this.totalPrice + shippingFees - discountAmount;
        order.discountAmount = discountAmount;
      } else {
        order.paidTotal = this.totalPrice + shippingFees;
      }
      order.user = user;
      order.date = moment(new Date()).format("dddd, MMM Do YYYY, h:mm:ss a");
      order.totalPrice = this.totalPrice + shippingFees;
      this.orderNumber = "_" + Math.random().toString(36).substr(2, 9);
      order.number = this.orderNumber;
      this.setConfirmedOrders(order);
      this.clearCart();
      this.setValidCoupon({
        text: "",
        value: 0,
      });
      this.openModal();
    },
    finishCheckOutHandler() {
      this.closeModal();
      setTimeout(() => {
        this.$router.push("/profile");
      }, 500);
    },
  },
  beforeRouteLeave(to, from, next) {
    // ...
    this.closeModal();
    next();
  },
  beforeDestroy() {
    this.closeModal();
  },
  unmounted() {
    this.orderNumber = undefined;
    this.closeModal();
  },
};
</script>

<style lang="scss" scoped>
.order-number {
  background-color: #f8f8f8;
  box-shadow: 2px 2px 2px 2px #eee inset;
  padding: 20px;
  text-align: center;
  color: #000;
  font-weight: 500;
  font-size: 22px;
}
.text {
  text-align: center;
  font-size: 20px;

  .btn {
    display: inline;
    font-size: 20px;
    padding: 0;
    margin: 0;
  }
}
</style>