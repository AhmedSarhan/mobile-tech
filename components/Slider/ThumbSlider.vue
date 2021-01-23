<template>
  <div v-if="images">
    <VueSlickCarousel
      ref="c1"
      :asNavFor="$refs.c2"
      :focusOnSelect="false"
      :accessibility="false"
      :touchMove="false"
      :arrows="false"
      :initialSlide="startingIndex"
      class="big-slider"
    >
      <div v-for="(img, index) in images" :key="index">
        <img :src="img" class="big-image" @click="zoomSliderHandler(index)" />
      </div>
    </VueSlickCarousel>
    <VueSlickCarousel
      ref="c2"
      :asNavFor="$refs.c1"
      :slidesToShow="4"
      :focusOnSelect="false"
      :initialSlide="startingIndex"
      :arrows="true"
      class="thumb-slider"
    >
      <div v-for="(img, i) in images" :key="i">
        <img :src="img" class="thumb-image" @click="handleClick(i)" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  props: ["images", "startingIndex"],
  methods: {
    handleClick(index) {
      this.$refs.c1.goTo(index);
    },
    zoomSliderHandler(index) {
      this.$emit("zoomSlider", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.big-slider {
  width: 80%;
  margin: 0 auto;
}
.big-image {
  width: 100%;
  cursor: zoom-in;
  -webkit-cursor: -webkit-zoom-in;
  -moz-cursor: -moz-zomm-in;
}
.thumb-slider {
  width: 80%;
  margin: 0 auto;
}
.thumb-image {
  width: 50px;
  cursor: pointer;
}
</style>