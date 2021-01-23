<template>
  <div class="profile-controllers">
    <div
      :class="activeButton === 'preview' ? 'active' : null"
      class="btn btn-custom-outline"
      @click="changePreviewHandler('preview')"
    >
      Profile
    </div>
    <div
      :class="activeButton === 'previous' ? 'active' : null"
      class="btn btn-custom-outline"
      @click="changePreviewHandler('previous')"
    >
      Previous Orders
    </div>
    <div
      :class="activeButton === 'wishlist' ? 'active' : null"
      class="btn btn-custom-outline"
      @click="changePreviewHandler('wishlist')"
    >
      WishList
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeButton: "preview",
    };
  },
  methods: {
    changePreviewHandler(payload) {
      this.activeButton = payload;
      this.$emit("changePreview", payload);
    },
  },
};
</script>
<style lang="scss" scoped>
.profile-controllers {
  box-shadow: 2px 2px 2px 2px #eee;
  border-radius: 5px;
  border: 1px solid #e67e22;
  .btn-custom-outline {
    border: none;
    display: block;
    border-radius: 0;
    &:nth-child(even) {
      border-top: 1px solid #e67e22;
      border-bottom: 1px solid #e67e22;
    }
    &.active {
      background-color: #e67e22;
      color: #fff;
    }
  }
}
</style>