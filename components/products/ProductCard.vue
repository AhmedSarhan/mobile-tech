<template>
  <div class="card my-3" :class="product.comparing ? 'comparing' : null">
    <div class="icons">
      <div>
        <i
          :class="product.comparing ? 'fa fa-list' : 'fa fa-compress'"
          aria-hidden="true"
          @click="compare(product)"
        ></i>
      </div>
      <div>
        <i
          :class="product.wishListed ? 'fa fa-heart' : 'fa fa-heart-o'"
          aria-hidden="true"
          @click="wishList(product)"
        ></i>
      </div>
    </div>
    <div @click="singleProductRouting(product)">
      <img class="card-img-top w-full" :src="product.cover" alt />
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
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
    </div>
    <div v-if="!product.bought">
      <button
        class="btn btn-custom-primary"
        @click="
          addToCart({
            ...product,
            quantity: 1,
          })
        "
      >
        Add to Cart
      </button>
    </div>
    <div v-if="product.bought">
      <div class="grid">
        <div class="increment">
          <button
            class="btn btn-transparent"
            @click="decrementProduct(product)"
            :disabled="product.quantity === 1"
          >
            -
          </button>
        </div>
        <div class="quantity">
          <h3>{{ product.quantity }}</h3>
        </div>
        <div class="increment">
          <button
            class="btn btn-transparent"
            @click="increment(product)"
            :disabled="product.quantity === 9"
          >
            +
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
    singleProductRouting(product) {
      // console.log(product.id);
      this.$router.push({
        path: `/store/${product.id}`,
        params: { id: product.id },
      });
    },
    ...mapActions({
      addToCart: "addToCart",
      incrementProduct: "incrementProduct",
      decrementProduct: "decrementProduct",
      wishList: "wishList",
      compare: "compare",
    }),
    increment(product) {
      this.incrementProduct(product);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  position: relative;
  &.comparing {
    border: 1px solid #e67e22;
  }
  .icons {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #e67e22;
    font-size: 20px;

    i {
      cursor: pointer;
    }
  }
  .card-title {
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color: #e67e22;
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
  .btn {
    width: 90%;
    text-transform: uppercase;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .quantity {
      grid-column: span 2 / span 2;
      border: 1px solid #ccc;
      height: 100%;
      width: 100%;
      color: #000;
      font-size: 20px;
      font-weight: 500;
      justify-content: center;
      display: flex;
      align-items: center;
    }
    .increment {
      width: 100%;
      height: 100%;

      .btn {
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
}
</style>