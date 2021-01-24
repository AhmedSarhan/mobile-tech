const vuexPresist = ({ store }) => {
  console.log('it is working localStorage style');
  let localCartProducts = [];
  let localConfirmedOrders = [];
  let localValidCoupon = {
    text: '',
    value: 0,
  };
  let localUser = {};
  let localWishList = [];
  let localComparing = [];

  let loadedCartProducts = [];
  let loadedConfirmedOrders = [];
  let loadedValidCoupon = {};
  let loadedUser = {};
  let loadedWishList = [];
  let loadedComparing = [];

  loadedCartProducts = localStorage.getItem('cartProducts');
  loadedConfirmedOrders = localStorage.getItem('confirmedOrders');
  loadedValidCoupon = localStorage.getItem('validCoupon');
  loadedUser = localStorage.getItem('userData');
  loadedWishList = localStorage.getItem('wishList');
  loadedComparing = localStorage.getItem('comparingProducts');

  localCartProducts = loadedCartProducts ? JSON.parse(loadedCartProducts) : [];
  localConfirmedOrders = loadedConfirmedOrders
    ? JSON.parse(loadedConfirmedOrders)
    : [];
  localValidCoupon = loadedValidCoupon
    ? JSON.parse(loadedValidCoupon)
    : {
        text: '',
        value: 0,
      };
  localUser = loadedUser ? JSON.parse(loadedUser) : {};
  localWishList = loadedWishList ? JSON.parse(loadedWishList) : [];
  localComparing = loadedComparing ? JSON.parse(loadedComparing) : [];

  let oldProducts = [...store.state.products];
  let boughProducts = oldProducts.map((item) => {
    let index = localCartProducts.findIndex(
      (product) => product.id === item.id
    );
    if (index > -1) {
      return { ...localCartProducts[index], comparing: false };
    }
    return item;
  });
  let likedProducts = boughProducts.map((item) => {
    let index = localWishList.findIndex((product) => product.id === item.id);
    if (index > -1) {
      return { ...localWishList[index], comparing: false };
    }
    return item;
  });
  let finalProducts = likedProducts.map((item) => {
    let index = localComparing.findIndex((product) => product.id === item.id);
    if (index > -1) {
      return localComparing[index];
    }
    return { ...item, comparing: false };
  });

  let data = {
    localProducts: finalProducts,
    localCartProducts: localCartProducts,
    localConfirmedOrders: localConfirmedOrders,
    localValidCoupon: localValidCoupon,
    localUser: localUser,
    localWishList: localWishList,
    localComparing: localComparing,
  };
  store.commit('SET_DATA', data);
};

export default vuexPresist;
