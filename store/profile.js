export const state = () => ({
  fullName: 'AnyName',
  money: 100,
  purchasedProducts: []
});

export const mutations = {
  setMoneyMut(currentState, newMoney) {
    currentState.money = newMoney;
  },
  setPurchasedProductsMut(currentState, products) {
    currentState.purchasedProducts = products;
  }
};

export const actions = {
  decreaseMoneyAct(context, spentMoney) {
    const remainedMoney = context.state.money - spentMoney;
    context.commit('setMoneyMut', remainedMoney);
  },

  buyProductAct(context, product) {
    const remainedMoney = context.state.money - product.price;
    const clonePurchasedProducts = [...context.state.purchasedProducts, product];

    context.commit('setPurchasedProductsMut', clonePurchasedProducts);
    context.commit('setMoneyMut', remainedMoney);
  },

  sellProductAct(context, product) {
    const remainedMoney = context.state.money + product.price;
    const soldProductIndex = context.state.purchasedProducts.findIndex(item => item.id == product.id);
    const clonePurchasedProducts = [...context.state.purchasedProducts];

    clonePurchasedProducts.splice(soldProductIndex, 1);

    context.commit('setPurchasedProductsMut', clonePurchasedProducts);
    context.commit('setMoneyMut', remainedMoney);
  }
};