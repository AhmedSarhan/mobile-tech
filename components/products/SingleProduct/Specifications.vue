<template>
  <div class="mt-3 bg-white p-3">
    <h3>Specifications</h3>
    <ul>
      <li v-for="(spec, index) in specifications" :key="index">
        <span class="font-weight-bold">{{ spec.key }}: </span>
        <span>{{ spec.data }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["specifications"],
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
</style>