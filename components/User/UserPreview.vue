<template>
  <div>
    <user-data v-if="currentUser" @editProfile="changePreviewHandler" />
    <user-form v-else @editProfile="changePreviewHandler" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentUser: false,
    };
  },
  computed: {
    ...mapState(["userData"]),
  },
  mounted() {
    if (this.userData.firstName) {
      this.currentUser = true;
    }
  },
  methods: {
    changePreviewHandler(payload) {
      this.currentUser = payload;
      // console.log(this.currentUser);
    },
  },
};
</script>

<style>
</style>