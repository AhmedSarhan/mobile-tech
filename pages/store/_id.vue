<template>
  <div class="container">
    <modal :modalWidth="50" v-show="showModal" @close="closeModal">
      <thumb-slider :images="product.images" :startingIndex="startingIndex" />
    </modal>
    <div class="row my-3">
      <div class="col-md-8 newCard">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <thumb-slider
                :images="product.images"
                :startingIndex="0"
                @zoomSlider="zoomSlider"
              />
            </div>
            <div class="col-md-8">
              <i
                :class="wishListed ? ' fa fa-heart' : 'fa fa-heart-o'"
                aria-hidden="true"
                @click="wishList(product)"
              ></i>
              <product-main-details :product="product" />
              <hr />
              <social-media :title="product.name" :url="url" />
            </div>
            <button
              class="btn btn-custom-primary"
              @click="addToCart({ ...product, quantity: 1 })"
            >
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-3">
        <key-features :features="product.keyFeatures" />
        <specifications :specifications="product.specifications" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      KeyFeaturesshowModal: false,
      startingIndex: 0,
      showModal: false,
    };
  },
  mounted() {
    let productId = this.$router.currentRoute.params.id;
    this.getSingleProduct(productId);
    // console.log(this.product);
  },
  methods: {
    ...mapActions({
      getSingleProduct: "getSingleProduct",
      addToCart: "addToCart",
      wishList: "wishList",
    }),
    closeModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
    zoomSlider(index) {
      // console.log(index);
      this.startingIndex = index;
      this.openModal();
    },
  },
  computed: {
    ...mapState({
      product: "singleProduct",
    }),
    url() {
      return process.env.hostUrl + this.$route.fullPath;
    },
    wishListed() {
      return this.product.wishListed;
    },
  },
};
</script>
<style lang="scss" scoped>
.newCard {
  background-color: #ffffff;
  padding: 10px 5px;
  box-shadow: 2px 2px 2px 2px #eee;
}
.btn-custom-primary {
  width: 90%;
  margin-top: 20%;
  text-transform: capitalize;
}
i.fa-heart-o {
  font-size: 20px;
  border: none;
  width: 100%;
  margin: 0;
  text-align: right;
  color: #e67e22;
  cursor: pointer;
}
i.fa-heart {
  font-size: 20px;
  border: none;
  width: 100%;
  margin: 0;
  text-align: right;
  color: #e67e22;
  cursor: pointer;
}
</style>

