<template>
  <div class="cart-card row bg-white my-3">
    <div class="col-md-11">
      <div class="row py-2">
        <div class="col-md-4">
          <img :src="product.cover" class="w-full" />
        </div>
        <div class="col-md-7">
          <h4>{{ product.name }}</h4>
          <p class="discount-price" v-if="product.discount">
            EGP {{ (product.price * (1 - product.discount / 100)).toFixed() }}
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
        <div class="flex my-3">
          <button class="btn btn-link" @click="removeFromWishList(product)">
            <i class="fa fa-trash" aria-hidden="true"></i> Remove
          </button>
          <button
            class="btn btn-success"
            @click="
              addToCart({
                ...product,
                quantity: 1,
              })
            "
          >
            <i class="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["product"],
  methods: {
    ...mapActions(["addToCart", "removeFromWishList"]),
  },
};
</script>

<style lang="scss" scoped>
.cart-card {
  box-shadow: 2px 2px 2px 2px #ccc;
  .col-md-1 {
    padding: 0;
  }
  img {
    width: 100%;
  }
  .flex {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }
  .grid {
    height: 100%;
    display: grid;
    align-items: center;
    vertical-align: middle;
    width: 100%;
    text-align: center;
    grid-template-rows: repeat(4, 1fr);

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }
    .quantity {
      grid-row: span 2 / span 2;
      border: 1px solid #ccc;
      height: 100%;
      width: 100%;
      color: #000;
      font-size: 25px;
      font-weight: 600;
    }
    .increment {
      width: 100%;
      height: 100%;
    }
    button {
      font-weight: 700;
      color: #ffffff;
      font-size: 25px;
      width: 100%;
      height: 100%;
      background: #e67e22;

      cursor: pointer;
      box-shadow: 0 2px 2px #eee;
      margin: 0;
      &:hover {
        background-color: transparent;
        color: #e67e22;
        border: 1px solid #e67e22;
      }
      button.disabled {
        background: #e67d2236;
      }
    }
  }
}
.discount-price {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  text-align: left;
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
  color: #e67e22;
  background-color: rgba(230, 126, 34, 0.3);
  padding: 5px 10px;
}
</style>