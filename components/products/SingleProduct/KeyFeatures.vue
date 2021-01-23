<template>
  <div class="mb-3 bg-white p-3">
    <h3>Key Features</h3>
    <ul>
      <li v-for="(feature, index) in features" :key="index">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["features"],
};
</script>

<style>
</style>