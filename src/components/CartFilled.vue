<template>
<section class="absolute right-20 top-20 bg-white rounded-md shadow-lg px-4 sm:py-16 lg:py-10 ">
 <div class=" box-border round-md"> 
  <div class="font-bold text-sm border-b-2 border-gray-100">
    Cart
  </div>
  <div class="flex flex-row justify-between pt-8">
    <div class="px-2">
      <img src="@/assets/images/image-product-1.jpg" alt="product-image" class="prd-img">
    </div>
    <div class="px-2">
      <p> Fall Limited Edition Sneakers</p>
      <p> $125.00 x 3 <span class="font-bold">$375.00</span></p>
    </div>
     <div class="px-2 text-left text-gray-300" @click="deleteCart">
      <font-awesome-icon icon="fa-solid fa-trash" />
      </div>
   
  </div>
  <button class="my-4 mx-8 px-10 py-3 w-3/4 bg-orange rounded-md text-white font-bold"> Checkout </button>
  </div>
  </section>
</template>

<script>


export default {
  data () {
    return {
    showCart: false
    }
  },
  methods : {
    deleteCart () {

    }
  }
}
</script>


<style scoped>
.prd-img{
border-radius: 10px;
 float: left;
 width: 50px;
}
</style>
