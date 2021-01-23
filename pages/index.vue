<template>
  <div class="container">
    <div class="best-offers" v-if="mainProducts">
      <h3>Best Offers</h3>
      <VueSlickCarousel
        ref="c1"
        :focusOnSelect="false"
        :accessibility="true"
        :touchMove="true"
        :arrows="true"
        class="big-slider"
        :slidesToShow="4"
        :speed="500"
        :autoplay="true"
        :slidesToScroll="2"
        :autoplaySpeed="2500"
        :responsive="[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ]"
      >
        <div
          v-for="product in mainProducts"
          :key="product.id"
          class="app-slider"
        >
          <product-card :product="product" />
        </div>
      </VueSlickCarousel>
    </div>
    <div class="best-offers" v-if="recommendedProducts">
      <h3>Recomended For you</h3>
      <VueSlickCarousel
        ref="c1"
        :focusOnSelect="false"
        :accessibility="true"
        :touchMove="true"
        :arrows="true"
        class="big-slider"
        :slidesToShow="4"
        :speed="500"
        :autoplay="true"
        :autoplaySpeed="2500"
        :responsive="[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            },
          },
        ]"
      >
        <div
          v-for="product in recommendedProducts"
          :key="product.id"
          class="app-slider"
        >
          <product-card :product="product" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { mapState } from "vuex";
export default {
  components: { VueSlickCarousel },
  computed: {
    ...mapState(["mainProducts", "recommendedProducts"]),
  },
};
</script>

<style lang="scss" scoped>
.best-offers {
  width: 90%;
  margin: 30px auto;
  padding: 5px;
  background-color: #f8f8f8;
  h3 {
  }
}
.app-slider {
  width: 90% !important;
  margin: auto;
  display: flex !important;
}
@media screen and( max-width: 600px) {
}
</style>
