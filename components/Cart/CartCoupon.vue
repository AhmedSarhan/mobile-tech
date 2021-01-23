<template>
  <div class="cart-coupon my-3 mt-10 bg-white">
    <form @submit.prevent="couponHandler">
      <input
        type="text"
        class="form-control"
        v-model="enteredCoupon"
        required
      />
      <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
      <button class="btn btn-custom-primary" type="submit">Enter Coupon</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      enteredCoupon: "",
      errorMessage: "",
      validCoupons: [
        {
          text: "Happy New Year",
          value: 10,
        },
        {
          text: "Single's Valentine",
          value: 80,
        },
        {
          text: "Pizza Hub Special One",
          value: 50,
        },
        {
          text: "The Goat",
          value: 90,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["setValidCoupon"]),
    couponHandler() {
      let dummyArray = this.validCoupons.filter((coupon) => {
        return this.enteredCoupon === coupon.text;
      });
      if (dummyArray.length === 1) {
        this.setValidCoupon(dummyArray[0]);
        this.errorMessage = "";
      } else {
        this.errorMessage = this.enteredCoupon + " isn't a valid Coupon";
      }
      this.enteredCoupon = "";
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.cart-coupon {
  box-shadow: 2px 2px 2px 2px #eee;
  border-radius: 5px;
  padding: 10px 5px;
  margin-top: 20px !important;

  .form-control {
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    padding: 10px 5px;
    width: 90%;
    margin: 5px auto;

    &:focus {
      outline: none;
    }
  }
  .btn {
    width: 90%;
    margin: 10px auto;
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
  }
  .error {
    color: #ee5253;
    font-size: 16px;
    padding: 5px;
  }
}
</style>