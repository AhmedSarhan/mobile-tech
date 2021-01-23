
<template>
  <div class="user-orders" id="myOrdersPage">
    <div v-if="confirmedOrdersCount">
      <confirmed-orders-table
        :confirmedOrders="confirmedOrders"
        @showDetails="selectOrder"
      />
      <modal :modalWidth="90" v-show="showModal" @close="closeModal">
        <order-details :order="selectedOrder" />
      </modal>
    </div>
    <div v-else>
      <h4 class="temp-text text-center">
        You Haven't orderered anything yet. You can visit our
        <router-link to="/store">Store</router-link> to buy something
      </h4>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showModal: false,
      selectedOrder: {},
    };
  },
  computed: {
    ...mapState(["confirmedOrders"]),
    confirmedOrdersCount() {
      return this.confirmedOrders.length;
    },
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    selectOrder(id) {
      let selectedOrders = [];
      selectedOrders = this.confirmedOrders.filter((order) => {
        return order.id === id;
      });
      this.selectedOrder = selectedOrders[0];
      this.showModal = true;
      // console.log("running", this.selectedOrder);
    },
  },
};
</script>

<style>
</style>



