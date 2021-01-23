<template>
  <div>
    <h3>Order Details</h3>
    <div class="container" v-if="order">
      <div class="row">
        <div class="col-md-7">
          <div class="row order" v-for="order in order.orders" :key="order.id">
            <div class="col-md-4">
              <img :src="order.cover" />
            </div>
            <div class="col-md-5">
              <h3 class="product-name">
                {{ order.name }}
              </h3>
            </div>
            <div class="col-md-3">
              <h5 class="product-price">
                {{ order.price * order.quantity }} EGP
              </h5>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="cart-finances my-3 bg-white">
            <h3>Cart Summary</h3>
            <div class="flex">
              <div>Total</div>
              <div>{{ order.totalPrice }} EGP</div>
            </div>
            <div class="flex">
              <div>Shipping Fees</div>
              <div>50 EGP</div>
            </div>
            <div class="flex">
              <div>
                Coupon Discount
                <p class="coupon" v-if="order.coupon">
                  <span>{{ order.coupon.text }}</span>
                </p>
              </div>
              <div>
                {{ order.discountAmount }} EGP
                <span v-if="order.coupon">(-{{ order.coupon.value }})%</span>
              </div>
            </div>
            <div class="flex" v-if="order.date">
              <div>Order Date</div>
              <div>{{ order.date }} EGP</div>
            </div>
            <hr />
            <div class="flex">
              <div>Paid Total</div>
              <div>{{ order.paidTotal }} EGP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container second-part" v-if="order.user">
      <div class="row">
        <div class="col-md-5">
          <div class="flex">
            <div>Order Number:</div>
            <div>{{ order.number }}</div>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-5">
          <div class="flex">
            <div>Client Name:</div>
            <div>{{ order.user.firstName + " " + order.user.lastName }}</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="flex">
            <div>Client Phone Number:</div>
            <div>{{ order.user.phone }}</div>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-5">
          <div class="flex">
            <div>Client Address:</div>
            <div>
              {{ order.user.city + " - " + order.user.street + " St." }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],
  mounted() {
    // console.log(this.order);
  },
};
</script>

<style scoped>
.order {
  border-bottom: 2px solid #919191;
}
.order:last-of-type {
  border-bottom: none;
}
img {
  margin: auto;
  display: block;
  width: 80%;
  margin-top: 0;
  margin-top: 20px;
  margin-bottom: 10px;
  overflow: hidden;
}
h2 {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 28px;
}

.product-name {
  font-size: 20px;
  font-weight: 500;
  margin-top: 50px;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  margin-bottom: 0;
}
.product-price {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0;
  background: #e67e22;
  color: #ffff;
  padding: 3px 10px;
  border-radius: 5px;
  direction: ltr;
  margin-top: 70px;
  text-align: center;
}
.btn-custom-primary {
  margin: 0 auto;
  display: table;
  margin-top: 20px;
  color: #ffff;
  font-size: 25px;
  font-weight: 400;
  padding: 10px 40px;
}

.second-part {
  margin-top: 20px;
}
.second-part .flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 400;
  border: 1px solid #b1adad;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #ebebeb;
}

.second-part h3 p {
  display: inline;
}

@media screen and (min-width: 270px) and (max-width: 768px) {
  img {
    width: 100%;
  }
  .product-name {
    margin-top: 15px;
  }
  .product-price {
    margin-top: 15px;
    margin-bottom: 20px;
    text-align: center;
    width: auto;
    padding: 5px 10px;
  }
  .second-part h3 span:last-of-type {
    float: none !important;
    display: block;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
</style>