import uniqid from 'uniqid';

export const state = () => ({
  products: [
    {
      id: 1,
      name: 'foo',
      price: 10
    },
    {
      id: 2,
      name: 'bar',
      price: 20
    }
  ]
});

export const mutations = {
  setProductsMut(currentState, products) {
    currentState.products = products;
  }
};

export const actions = {
  createProductAct(context, product) {
    product.id = uniqid();
    const cloneProducts = [...context.state.products, product];

    context.commit('setProductsMut', cloneProducts);
  },

  editProductAct(context, product) {
    const cloneProducts = [...context.state.products];
    const indexOfProduct = cloneProducts.findIndex(item => item.id == product.id);

    cloneProducts.splice(indexOfProduct, 1, product);

    context.commit('setProductsMut', cloneProducts);
  },

  deleteProductAct(context, id) {
    console.log(id);
    const cloneProducts = [...context.state.products];
    const indexOfProduct = cloneProducts.findIndex(item => item.id == id);
    cloneProducts.splice(indexOfProduct, 1);

    context.commit('setProductsMut', cloneProducts);
  }
};