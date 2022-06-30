<template>
<section>
  <!-- mobile screen -->
  <div class=" w-screen  lg:hidden flex flex-row py-4 items-start justify-center bg-transparent">
    <Slide class="w-4 -mt-64">
    <ul class="px-0 leading-loose flex flex-col justify-start items-start w-5/6 list-none">
    <li class="px-3" @click="makeCurrent('collections')"
      :class="{ current: collections }">Collections
      </li>
    <li class="px-3" @click="makeCurrent('men')"
      :class="{ current: men }"
    >Men</li>
    <li class="px-3" @click="makeCurrent('women')"
      :class="{ current: women }">Women
     </li>
    <li class="px-3" @click="makeCurrent('about')"
      :class="{ current: about }">About
    </li>
    <li class="px-3" @click="makeCurrent('contact')"
       :class="{ current: contact }">Contact
    </li>
    </ul>
   </Slide>

    </div>
  <teleport to='body'>
    <div v-if="cartIsVisible">
    <CartEmpty v-if="cartIsEmpty" />
    <CartFilled v-else />
    </div>
  </teleport>
<div class="index bg-slate-50 w-sreen border-b-2 border-gray-50 shadow-sm">
   <div class="flex flex-row justify-between w-screen px-10 py-2">
  <div class="flex flex-row items-center justify-center pb-2 lg:py-2 px:12 lg:px-10">
    <div class="logo">
    <!-- <img src="@/assets/images/logo.svg" alt="logo"> -->
    <p class="font-extrabold sm:text-3xl lg:text-2xl px-10 lg:px-4">sneakers</p>
    </div>
    <div class="hidden lg:flex justify-around">
    <ul class="flex flex-row justify-around px-12 font-light text-sm text-gray-400 ">
   <li class="px-3" @click="makeCurrent('collection')"
      :class="{ current: collection }">Collections
      </li>
    <li class="px-3" @click="makeCurrent('men')"
      :class="{ current: men }">Men
      </li>
    <li class="px-3" @click="makeCurrent('women')"
      :class="{ current: women }">Women
     </li>
    <li class="px-3" @click="makeCurrent('about')"
      :class="{ current: about }">About
    </li>
    <li class="px-3" @click="makeCurrent('contact')"
       :class="{ current: contact }">Contact
    </li>
    </ul>
    </div>
  </div>
  <div class="cart-img row" >
    <div class="column">
    <!-- <img src="@/assets/images/icon-cart.svg" alt="cart" class="w-1/4 lg:pt-2 ml-3" @click="cartVisibility"> -->
    <font-awesome-icon icon="fa-solid fa-cart-shopping" class="w-1/4 text-center font-bold ml-3" @click="cartVisibility" />
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
import { Slide } from 'vue3-burger-menu'

export default {
  name : 'header',
  components: {
    CartEmpty, 
    CartFilled,
    Slide,
  },
  data () {
    return {
      cartIsEmpty: false,
      cartIsVisible: false,
      collection: true,
      men: false,
      women: false,
      about: false,
      contact: false,
    }
  },
  methods : {
    cartVisibility () {
      this.cartIsVisible=!this.cartIsVisible
    },
    makeCurrent (value) {
      if (value === 'collection') {
        this.collection = true
        this.men = false
        this.women = false
        this.about = false
        this.contact= false
      } else if (value === 'men') {
        this.collection = false
        this.men = true
        this.women = false
        this.about = false
        this.contact= false
      } else if (value === 'women') {
        this.collection = false
        this.men = false
        this.women = true
        this.about = false
        this.contact= false
      } else if (value === 'about') {
       this.collection = false
        this.men = false
        this.women = false
        this.about = true
        this.contact= false
    } else if (value === 'contact') {
       this.collection = false
        this.men = false
        this.women = false
        this.about = false
        this.contact= true
  }
}}}
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
.current {
  color: black !important;
  border-bottom: 2px solid orange;
}
</style>