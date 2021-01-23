<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" :to="'/'"
          >Mobile<span>Tech</span></router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="'/'">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/store'">Store</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/comparing'"
                >Comparing</router-link
              >
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0 mr-auto">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchQuery"
            />
            <router-link
              :to="{ path: '/search', query: { search: searchQuery } }"
            >
              <button
                class="btn btn-custom-outline my-2 my-sm-0"
                type="submit"
                @click="
                  () => {
                    searchProduct(searchQuery);
                  }
                "
              >
                Search
              </button>
            </router-link>
          </form>
          <div class="">
            <div class="dropdown open">
              <router-link :to="'/profile'">
                <button class="btn btn-secondary text-white" type="button">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </button>
              </router-link>
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="triggerId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="cart-icon">
                  <span class="count">{{ cartCount }}</span>
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i
                ></span>
                Cart
              </button>
              <div @click="$event.stopPropagation()">
                <mini-cart :products="cartProducts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState({
      cartProducts: "cartProducts",
    }),
    ...mapGetters({
      cartCount: "cartCount",
    }),
  },
  methods: {
    ...mapActions(["searchProduct"]),
  },
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 500;
  span {
    color: #e67e22;
  }
}
.cart-icon {
  position: relative;

  .count {
    position: absolute;
    background: orange;
    font-size: 0.625rem;
    transform: translate(50%, -50%);
    font-weight: 700;
    padding: 0.45em;
    height: 17px;
    min-width: 17px;
    top: 0;
    background-color: #f68b1e;
    right: 0;
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.nav-link {
  text-transform: uppercase;
}
.nuxt-link-exact-active {
  color: #ffffff !important ;
}
</style>