<template>
<section>
  <teleport to='body'>
    <div v-if="cartIsVisible">
    <CartEmpty v-if="cartIsEmpty" />
    <CartFilled v-else />
    </div>
  </teleport>
<div class="index bg-slate-50 w-sreen border-b-2 border-gray-50 shadow-sm">
   <div class="flex flex-row justify-between w-screen px-10 py-2">
  <div class="flex flex-row justify-around">
    <div class="py-2 w-2/4 h-2/4">
    <img src="@/assets/images/logo.svg" alt="logo">
    </div>
    <div class=" head-text">
    <ul class="flex flex-row justify-around px-12 py-2">
    <li class="px-3">Collections</li>
    <li class="px-3">Men</li>
    <li class="px-3">Women</li>
    <li class="px-3">About</li>
    <li class="px-3">Contact</li>
    </ul>
    </div>
  </div>
  <div class="cart-img row" >
    <div class="column">
    <img src="@/assets/images/icon-cart.svg" alt="cart" class="w-1/4 pt-2 ml-3" @click="cartVisibility">
    </div>
    <div class="column">
    <img src="@/assets/images/image-avatar.png" alt="avatar" class="w-3/5 mr-3">
    </div>
  </div>
  </div>
</div>
</section>
</template>

<script>
import CartEmpty from './CartEmpty.vue'
import CartFilled from './CartFilled.vue'


export default {
  name : 'header',
  components: {
    CartEmpty, 
    CartFilled,
  },
  data () {
    return {
      cartIsEmpty: false,
      cartIsVisible: false
    }
  },
  methods : {
    cartVisibility () {
      this.cartIsVisible=!this.cartIsVisible
    }
  }
}
</script>


<style scoped>
.index {
z-index: 9999;
border-bottom: 1px light  gray;
}

.column {
  float: left;
  width: 50%;
  padding: 1px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

.head-text{
  display: flex;
  justify-content: space-around;
}
</style>