<template>
<section class="absolute right-20 top-20 bg-white rounded-md shadow-lg px-4 py-10 ">
 <div class=" box-border round-md"> 
  <div class="font-bold text-sm border-b-2 border-gray-100">
    Cart
  </div>
  <div class="flex flex-row justify-between pt-8">
    <div class="px-2">
      <img src="@/assets/images/image-product-1.jpg" alt="product-image" class="prd-img">
    </div>
    <div>
      <p> Fall Limited Edition Sneakers</p>
      <p> $125.00 x {{}}</p>
    </div>
   
  </div>
  <button class="m-4 px-10 py-3 bg-orange rounded-md text-white"> Checkout </button>
  </div>
  </section>
</template>

<script>


export default {
}
</script>


<style scoped>
.prd-img{
border-radius: 10px;
 float: left;
 width: 50px;
}
</style>
