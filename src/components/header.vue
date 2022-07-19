<template>
<section>
  <!-- mobile screen -->
  <div class=" w-screen  lg:hidden flex flex-row py-3 lg:py-4 items-start justify-center bg-transparent">
    <Slide :closeOnNavigation="true" class="w-4 -mt-64">
    <ul class="px-0 leading-loose flex flex-col justify-start items-start w-5/6 list-none">
     <router-link to="/">  
      <li class="px-3" @click="makeCurrent('collection')"
      :class="{ current: collection }">Collections
      </li>
       </router-link>
       <router-link to="/men"> 
       <li class="px-3" @click="makeCurrent('men')"
      :class="{ current: men }">Men
      </li> 
      </router-link>
     <router-link to="/women">
     <li class="px-3" @click="makeCurrent('women')"
      :class="{ current: women }">Women
     </li>
    </router-link>
    <router-link to="/about"> 
    <li class="px-3" @click="makeCurrent('about')"
      :class="{ current: about }">About
    </li>
    </router-link>
    <router-link to="/contact">
    <li class="px-3" @click="makeCurrent('contact')"
       :class="{ current: contact }">Contact
    </li> 
    </router-link>
    </ul>
   </Slide>

    </div>
  <teleport to='body'>
    <div v-if="cartIsVisible">
    <CartFilled />
    </div>
  </teleport>
  <!-- medium and large screen -->
<div class="index bg-slate-50 w-sreen border-b-2 border-gray-50 shadow-sm mx-auto">
   <div class="flex flex-row justify-between w-screen px-10 sm:py-0 lg:py-2">
  <div class="flex flex-row items-center justify-center md:pb-0 lg:py-2 px:12 lg:px-10 pb-8">
    <div class="logo">
    <!-- <img src="@/assets/images/logo.svg" alt="logo"> -->
    <p class="font-bold sm:text-4xl lg:text-3xl px-12 lg:px-4">sneakers</p>
    </div>
    <div class="hidden lg:flex justify-around">
    <ul class="flex flex-row justify-around px-12 font-light text-sm text-gray-400 ">
      <router-link to="/">  
      <li class="px-3" @click="makeCurrent('collection')"
      :class="{ current: collection }">Collections
      </li>
       </router-link>
       <router-link to="/men"> 
       <li class="px-3" @click="makeCurrent('men')"
      :class="{ current: men }">Men
      </li> 
      </router-link>
     <router-link to="/women">
     <li class="px-3" @click="makeCurrent('women')"
      :class="{ current: women }">Women
     </li>
    </router-link>
    <router-link to="/about"> 
    <li class="px-3" @click="makeCurrent('about')"
      :class="{ current: about }">About
    </li>
    </router-link>
    <router-link to="/contact">
    <li class="px-3" @click="makeCurrent('contact')"
       :class="{ current: contact }">Contact
    </li> 
    </router-link>
    </ul>
    </div>
  </div>
  <div class="cart-img row pb-1 lg:pb-0" >
    <div class="column">
    <!-- <img src="@/assets/images/icon-cart.svg" alt="cart" class="w-1/4 lg:pt-2 ml-3" @click="cartVisibility"> -->
    <font-awesome-icon icon="fa-solid fa-cart-shopping" class="w-1/4 flex lg:pt-3 font-bold lg:ml-3" @click="cartVisibility" />
    </div>
    <div class="column">
    <img src="@/assets/images/image-avatar.png" alt="avatar" class="w-3/5  lg:mr-3">
    </div>
  </div>
  </div>
</div>
</section>
</template>

<script>
import CartFilled from './CartFilled.vue'
import { Slide } from 'vue3-burger-menu'

export default {
  name : 'header',
  components: {
    CartFilled,
    Slide,
  },
  data () {
    return {
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
  cursor: pointer;
}
</style>