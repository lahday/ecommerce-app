// import { reactive } from 'vue'

// export const store = reactive({

// })


import { createStore } from 'vuex'

const cart = JSON.parse(localStorage.getItem('cart'))

export default createStore({
  state: {
    item: null,
    cart: [],
  },
  getters: {
    cart: (state) => state.cart,
  },
  mutations: {
    addProductToCart(state, item) {
      const single_product = state.cart.find((cart) => cart.id === item.id)
      if (single_product) {
        single_product.quantity++
      } else {
        state.cart.push(item)
      }
      // this.commit('saveCart')
      // console.log(item)
    },
    // saveCart(state) {
    //   localStorage.setItem('cart', JSON.stringify(state.cart))
    // },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id)
      console.log(state.cart)
    },
    // clearCart(state) {
    //   state.cart = []
    //   localStorage.removeItem('cart')
    // },
  },
  actions: {
    removeFromCart({ commit }, id) {
      commit('removeFromCart', id)
      // commit('saveCart')
    },
  },
  modules: {
  }
})


