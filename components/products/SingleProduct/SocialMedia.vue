<template>
  <div>
    <ShareNetwork network="facebook" :url="url" :title="title">
      <i class="fa fa-facebook" aria-hidden="true"></i>
    </ShareNetwork>
    <ShareNetwork network="twitter" :url="url" :title="title">
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </ShareNetwork>
    <ShareNetwork network="whatsapp" :url="url" :title="title">
      <i class="fa fa-whatsapp" aria-hidden="true"></i>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  props: ["url", "title"],
};
</script>

<style lang="scss" scoped>
i {
  font-size: 17px;
  margin: 2px 5px;
  border: 1px solid #000;
  color: #000;
  border-radius: 50%;
  text-align: center;
  padding: 5px;
  width: 30px;
  height: 30px;
  &:hover {
    border: 1px solid #ffab21;
    color: #ffab21;
  }
}
</style>