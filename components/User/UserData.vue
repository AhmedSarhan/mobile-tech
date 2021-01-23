<template>
  <div class="user-data">
    <div class="row my-1">
      <div class="col-md-6">
        <div class="flex">
          <div class="key">User Name:</div>
          <div class="data">
            {{ userData.firstName + " " + userData.lastName }}
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="flex">
          <div class="key">Phone Number:</div>
          <div class="data">{{ userData.phone }}</div>
        </div>
      </div>
    </div>
    <div class="row my-1">
      <div class="col-md-12">
        <div class="flex">
          <div class="key">Email Address:</div>
          <div class="data">{{ userData.email }}</div>
        </div>
      </div>
      <!-- <div class="col-md-6">
        <div class="flex">
          <div class="key"></div>
           class="data"<div></div>
        </div>
      </div> -->
    </div>
    <div class="row my-1">
      <div class="col-md-6">
        <div class="flex">
          <div class="key">City:</div>
          <div class="data">{{ userData.city }}</div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="flex">
          <div class="key">Street:</div>
          <div class="data">{{ userData.street }} St.</div>
        </div>
      </div>
    </div>
    <button class="btn btn-custom-primary" @click="EditProfileHandler">
      Edit Profile
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userData"]),
  },
  methods: {
    EditProfileHandler() {
      this.$emit("editProfile", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-data {
  .flex {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;

    .key {
      font-weight: 600;
    }
    .data {
      color: #e67e22;
    }
  }
}
</style>