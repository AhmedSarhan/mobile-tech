<template>
  <div class="divTable">
    <div class="divTableBody">
      <div class="divTableRow">
        <div class="divTableCell">Order No.</div>
        <div class="divTableCell">Paid Total</div>
        <div class="divTableCell">Order Date</div>
        <div class="divTableCell">Order Details</div>
      </div>
      <div
        class="divTableRow"
        v-for="order in confirmedOrders"
        :key="order.number"
      >
        <div class="divTableCell" :data-label="'Order No.'">
          <h4>{{ order.number }}</h4>
        </div>
        <div class="divTableCell" :data-label="'Paid Total'">
          <h4>{{ order.paidTotal }}</h4>
        </div>
        <div class="divTableCell" :data-label="'Order Date'">
          <h4>{{ order.date }}</h4>
        </div>
        <div class="divTableCell" :data-label="'Order Details'">
          <button
            type="button"
            class="btn btn-custom-primary"
            @click="showOrderDetailsHandler(order.id)"
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["confirmedOrders"],
  methods: {
    showOrderDetailsHandler(id) {
      this.$emit("showDetails", id);
    },
  },
};
</script>

<style scoped>
.divTable {
  display: table;
  width: 100%;
  border-spacing: 0 25px;
}
.divTableRow:first-of-type {
  background: #2a2e3f;
  color: #ffff;
}
.divTableRow {
  display: table-row;
  text-align: center;
  background: #ebebeb;
}

.divTableRow:first-of-type .divTableCell {
  font-size: 20px;
  font-weight: 400;
  padding-top: 30px;
  padding-bottom: 20px;
}
.divTableCell {
  display: table-cell;
  padding: 3px 10px;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
.divTableCell:first-of-type {
  border-right: 1px solid #999999;
}
.divTableCell:last-of-type {
  border-left: 1px solid #999999;
}

.divTableBody {
  display: table-row-group;
}
.divTable h4 {
  font-size: 20px;
  font-weight: 400;
}
.divTable h4.order-state.new {
  background-color: #40c8ff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
  color: #ffff;
}
.divTable h4.order-state.delivered {
  background-color: #4caf50 !important;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
  color: #ffff;
}
.divTable h4.order-state.prepared {
  background-color: #2a2e3f;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
  color: #ffff;
}
.divTable .btn-transparent {
  font-size: 20px;
  margin-bottom: 10px;
}
@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  .divTable {
    width: 100%;
  }

  /* Force table to not be like tables anymore */
  .divTable,
  .divTable .divTableBody,
  .divTable .divTableRow,
  .divTable .divTableCell {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  .divTable .divTableRow:first-of-type {
    position: absolute;
    display: none;
  }

  .divTable .divTableRow {
    border: 1px solid #ccc;
  }

  .divTable .divTableCell {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #ccc;
    position: relative;
    padding-left: 50%;
  }

  .divTable .divTableCell:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    /* Label the data */
    content: attr(data-label);

    color: #000;
    font-weight: bold;
  }
}
</style>