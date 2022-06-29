<template>
<section class="w-3/4">
  <div class="flex flex-col md:flex-row justify-even w-screen">
    <div class="flex flex-row md:flex-col w-screen">
      <div class="pt-6">
      <img src="@/assets/images/image-product-1.jpg" alt="product-image" class=" prd-img rounded-lg">
    </div>
    <div class=" hidden sm:flex md:flex-row justify-between py-6 w-1/2 mx-auto">
      <img src="@/assets/images/image-product-1.jpg" alt="product--image" class="w-1/5 prd-img-sel">
      <img src="@/assets/images/image-product-2.jpg" alt="product-image" class="w-1/5 prd-img-sel">
      <img src="@/assets/images/image-product-3.jpg" alt="product-image" class="w-1/5 prd-img-sel">
      <img src="@/assets/images/image-product-4.jpg" alt="product-image" class="w-1/5 prd-img-sel">
    </div>
    </div>
    <div>
    <div class=" sm:text-justify">
      <p class="text-orange font-bold text-sm pb-2 pt-8">SNEAKER COMPANY</p>
      <p class=" font-bold sm:text-2xl lg:text-3xl pb-6">Fall Limited Edition <br> Sneakers <br/></p>
      <p class=" w-3/4 pb-6 text-md leading-6">
      These low profile sneakers are your perfect casual wear 
      companion.Featuring a duarble rubber outer sole,
      they'll withstand everything the weather can offer
      </p>
      <p class=" pb-2 font-bold text-2xl text-justify">$125.00 <span class=" text-orange px-4 brd bg-gray-50 text-sm shadow-sm">50%</span></p>
      <p class=" pb-2 text-gray-400 line-through">$250.00</p>
    </div>
    <div class="pt-4 ">
      <div class="qty-counter flex justify-start btn bg-gray-200 px-10 py-3 shadow-lg">
        <button class=" px-5 text-orange btn" @click="counter--">-</button>
        {{counter <=0 ? 0 : counter }}
        <button class="px-5  text-orange btn" @click="counter++">+</button>
      </div>
      <button class="mr-16 px-10 py-3 bg-orange rounded-md text-white" @click="addToCart">
         <img src="@/assets/images/icon-cart.svg" alt="cart" class="img-cart px-2 text-white ">
      <span class="texl-lg font-bold text-white">Add to cart</span>
      </button>
    </div>
    </div>
  </div>
  </section>
</template>

<script>


export default {
  data () {
    return {
      counter : 0
    }
  },
  methods: {
    addToCart() {
      console.log('item submitted')
    }
  }
}
</script>


<style scoped>
.img-cart {
  float: left;
}
.qty-counter{
  float: left;
}
.prd-img{
border-radius: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  min-width: 350px;
}
.btn {
  border: 4px light gray;
  /* background-color: gray; */
  /* color: black; */
  /* padding: 14px 28px; */
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}
.brd{
  border: 2px light orange;
}
.prd-img-sel{
border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90px;
  padding: 5px;
  min-width: 90px;
}
/* @media screen and (min-width: 480) {
  .prd-img{
border-radius: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
} */
</style>