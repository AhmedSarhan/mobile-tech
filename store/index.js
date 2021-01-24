import axios from 'axios';

export const state = () => ({
  products: [],
  singleProduct: {},
  cartProducts: [],
  wishListProducts: [],
  searchProducts: [],
  confirmedOrders: [],
  validCoupon: {
    text: '',
    value: 0,
  },
  userData: {},
  comparingProducts: [],
  mainProducts: [],
  recommendedProducts: [],
});
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getProducts');
  },
  setLocalCart({ commit }) {
    commit('SET_CART');
  },
  // try to replace it with nuxtServerInit
  async getProducts({ commit }) {
    await axios
      .get(process.env.baseUrl + 'mobiles.json')
      .then((res) => {
        // console.log(res.data);
        commit('SET_PRODUCTS', res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  },
  getSingleProduct({ commit }, productId) {
    commit('SET_PRODUCT', productId);
  },
  addToCart({ commit }, product) {
    commit('ADD_CART', product);
    commit('SET_CART');
  },
  removeFromCart({ commit }, id) {
    commit('REMOVE_CART', id);
    commit('SET_CART');
  },
  incrementProduct({ commit }, product) {
    commit('INCREMENT_PRODUCT_QUANTITY', product);
    commit('SET_CART');
  },
  decrementProduct({ commit }, product) {
    commit('DECREMENT_PRODUCT_QUANTITY', product);
    commit('SET_CART');
  },
  setValidCoupon({ commit }, coupon) {
    commit('SET_COUPON', coupon);
  },
  setUser({ commit }, user) {
    commit('SET_USER_DATA', user);
  },
  setConfirmedOrders({ commit }, order) {
    commit('CONFIRM_ORDER', order);
    commit('EMPTY_CART');
    commit('SET_CART');
  },
  clearCart({ commit }) {
    commit('EMPTY_CART');
    commit('SET_CART');
  },
  wishList({ commit }, product) {
    commit('ADD_WISH_LIST', product);
    commit('SET_CART');
  },
  removeFromWishList({ commit }, product) {
    commit('REMOVE_WISH_LIST', product);
    commit('SET_CART');
  },
  compare({ commit }, product) {
    commit('COMPARISON', product);
    commit('SET_CART');
  },
  searchProduct({ commit }, query) {
    commit('SEARCH', query);
  },
};
export const mutations = {
  SET_DATA(state, data) {
    let initialProducts = [...state.products];

    state.cartProducts = data.localCartProducts;
    state.confirmedOrders = data.localConfirmedOrders;
    state.validCoupon = data.localValidCoupon;
    state.userData = data.localUser;
    state.wishListProducts = data.localWishList;
    state.comparingProducts = data.localComparing;
    state.products = data.localProducts.length
      ? data.localProducts
      : initialProducts;

    let recProducts = state.products
      .slice()
      .sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount));
    let pricesProducts = state.products
      .slice()
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    state.recommendedProducts = pricesProducts.slice(0, 9);
    state.mainProducts = recProducts.slice(0, 9);
  },
  SET_CART(state) {
    localStorage.setItem('wishList', JSON.stringify(state.wishListProducts));
    localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    localStorage.setItem(
      'comparingProducts',
      JSON.stringify(state.comparingProducts)
    );
  },
  SET_PRODUCTS(state, products) {
    for (let key in products) {
      state.products.push({
        id: key,
        wishListed: false,
        bought: false,
        quantity: 0,
        comparing: false,
        ...products[key],
      });
      let recProducts = state.products
        .slice()
        .sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount));
      let pricesProducts = state.products
        .slice()
        .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      state.recommendedProducts = pricesProducts.slice(0, 9);
      state.mainProducts = recProducts.slice(0, 9);
    }
  },
  SET_PRODUCT(state, productId) {
    let product = {};
    product = state.products.find((item) => {
      return item.id === productId;
    });
    state.singleProduct = product;
  },
  ADD_CART(state, product) {
    let productInProducts = state.products.find((item) => {
      return item.id === product.id;
    });
    let productInWishList = state.wishListProducts.find((item) => {
      return item.id === product.id;
    });
    let productInCart = state.cartProducts.find((item) => {
      return item.id === product.id;
    });
    if (productInWishList) {
      state.wishListProducts = state.wishListProducts.filter((item) => {
        return item.id !== product.id;
      });
      productInProducts.wishListed = false;
    }
    productInProducts.bought = true;
    product.bought = true;
    if (productInCart) {
      let newQuantity = productInCart.quantity + product.quantity;
      productInCart.quantity = newQuantity;
      productInProducts.quantity = newQuantity;
      return;
    }
    productInProducts.quantity = product.quantity;
    state.cartProducts.push(product);
  },
  REMOVE_CART(state, id) {
    state.cartProducts = state.cartProducts.filter((product) => {
      return product.id !== id;
    });
    let productInProducts = state.products.find((item) => {
      return item.id === id;
    });
    productInProducts.bought = false;
  },
  INCREMENT_PRODUCT_QUANTITY(state, product) {
    let productInCart = state.cartProducts.find((item) => {
      return item.id === product.id;
    });
    let productInProducts = state.products.find((item) => {
      return item.id === product.id;
    });
    productInCart.quantity++;
    productInProducts.quantity++;
  },
  DECREMENT_PRODUCT_QUANTITY(state, product) {
    let productInCart = state.cartProducts.find((item) => {
      return item.id === product.id;
    });
    let productInProducts = state.products.find((item) => {
      return item.id === product.id;
    });
    productInCart.quantity--;
    productInProducts.quantity--;
  },
  SET_COUPON(state, coupon) {
    state.validCoupon = coupon;
    localStorage.setItem('validCoupon', JSON.stringify(coupon));
  },
  SET_USER_DATA(state, user) {
    localStorage.setItem('userData', JSON.stringify(user));
    state.userData = user;
  },
  CONFIRM_ORDER(state, order) {
    state.confirmedOrders.push(order);
    localStorage.setItem(
      'confirmedOrders',
      JSON.stringify(state.confirmedOrders)
    );
  },
  EMPTY_CART(state) {
    state.cartProducts = [];
    state.products = state.products.map((product) => {
      return { ...product, bought: false, quantity: 0 };
    });
  },
  ADD_WISH_LIST(state, product) {
    let productInWishList = state.wishListProducts.find((item) => {
      return item.id === product.id;
    });
    let productInProducts = state.products.find((item) => {
      return item.id === product.id;
    });
    let productInCart = state.cartProducts.find((item) => {
      return item.id === product.id;
    });
    if (productInCart) {
      state.cartProducts = state.cartProducts.filter((item) => {
        return item.id !== product.id;
      });
    }
    if (productInWishList) {
      state.wishListProducts = state.wishListProducts.filter((item) => {
        return item.id !== product.id;
      });
      productInProducts.wishListed = false;
    } else {
      productInProducts.wishListed = true;
      productInProducts.bought = false;
      state.wishListProducts.push(productInProducts);
    }
  },
  REMOVE_WISH_LIST(state, product) {
    state.wishListProducts = state.wishListProducts.filter((item) => {
      return item.id !== product.id;
    });
    let productInProducts = state.products.find((item) => {
      return item.id === product.id;
    });
    productInProducts.wishListed = false;
  },
  COMPARISON(state, product) {
    let ProductInComparison = state.comparingProducts.find((item) => {
      return item.id === product.id;
    });
    let productInProducts = state.products.find((item) => {
      return item.id === product.id;
    });
    if (state.comparingProducts.length >= 2) {
      if (!ProductInComparison) {
        for (let product in state.comparingProducts) {
          state.comparingProducts[product].comparing = false;
        }
        state.comparingProducts = [];
        product.comparing = true;
        productInProducts.comparing = true;
        state.comparingProducts.push(product);
      } else {
        product.comparing = false;
        state.comparingProducts = state.comparingProducts.filter((item) => {
          return item.id !== product.id;
        });
      }
    } else {
      if (ProductInComparison) {
        product.comparing = false;
        state.comparingProducts = state.comparingProducts.filter((item) => {
          return item.id !== product.id;
        });
      } else {
        product.comparing = true;
        // productInProducts.comparing = true;

        state.comparingProducts.push(product);
      }
    }
  },
  SEARCH(state, query) {
    state.searchProducts = state.products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase()) ||
        product.name.toLowerCase() === query.toLowerCase() ||
        product.brand.toLowerCase() === query.toLowerCase()
      );
    });
  },
};

export const getters = {
  cartCount(state) {
    if (state.cartProducts.length) {
      return state.cartProducts.length;
    } else {
      return 0;
    }
  },
  totalPrice(state) {
    let total = 0;
    if (state.cartProducts.length) {
      state.cartProducts.forEach((product) => {
        total += product.discount
          ? parseInt(
              (
                product.price *
                (1 - product.discount / 100) *
                product.quantity
              ).toFixed()
            )
          : (product.price * product.quantity).toFixed();
      });
    }
    return total;
  },
};
