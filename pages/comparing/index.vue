<template>
  <div class="container">
    <h3 class="text-center my-4">Comparing Page</h3>
    <table v-if="comparingCount > 0">
      <tr class="feature">
        <th>Product Name:</th>
        <td
          data-label="Product Name:"
          v-for="product in comparingProducts"
          :key="product.id"
        >
          <h3 class="value">{{ product.name }}</h3>
        </td>
      </tr>
      <tr class="feature">
        <th>Product Image:</th>
        <td
          data-label="Product Image:"
          v-for="product in comparingProducts"
          :key="product.id"
        >
          <img :src="product.cover" />
        </td>
      </tr>
      <tr class="feature">
        <th>Product Price:</th>
        <td
          data-label="Product Price:"
          v-for="product in comparingProducts"
          :key="product.id"
        >
          <h3 class="value">{{ product.price }}</h3>
        </td>
      </tr>
      <tr class="feature">
        <th>Final Price (discount %):</th>
        <td
          data-label="Final Price (discount %):"
          v-for="product in comparingProducts"
          :key="product.id"
        >
          <h3 class="value">
            {{
              product.discount
                ? (product.price * (1 - product.discount / 100)).toFixed()
                : product.price
            }}
            ({{ product.discount ? product.discount : 0 }}%)
          </h3>
        </td>
      </tr>
      <tr class="feature">
        <th>Product Key Features:</th>
        <td
          data-label="Product Key Features:"
          v-for="product in comparingProducts"
          :key="product.id"
        >
          <ul class="value">
            <li v-for="(feature, index) in product.keyFeatures" :key="index">
              {{ feature }}
            </li>
          </ul>
        </td>
      </tr>
      <tr class="feature">
        <th>Product Specifications:</th>
        <td
          data-label="Product Specifications:"
          v-for="product in comparingProducts"
          :key="product.id"
        >
          <ul class="value last">
            <li v-for="(spec, index) in product.specifications" :key="index">
              <span class="font-weight-bold">{{ spec.key }}: </span>
              <span>{{ spec.data }}</span>
            </li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {},
  computed: {
    ...mapState(["comparingProducts"]),
    comparingCount() {
      return this.comparingProducts.length;
    },
  },
  mounted() {
    // console.log(this.comparingProducts);
    console.log(this.comparingCount);
  },
};
</script>

<style lang="scss" scoped>
table {
  background: #fff;
  margin-top: 20px !important;
  margin-bottom: 30px !important;
  img {
    width: 100%;
  }
  ul.last {
    list-style: none;
  }
  .value {
    font-size: 18px;
  }
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: left;
  }

  //   table td::before {
  //     /*
  //     * aria-label has no advantage, it won't be read inside a table
  //     content: attr(aria-label);
  //     */
  //     content: attr(data-label);
  //     float: left;
  //     font-weight: bold;
  //     text-transform: uppercase;
  //   }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>