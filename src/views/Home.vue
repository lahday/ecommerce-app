<template>
<section class="md:w-3/4">
  <div class="flex flex-col md:flex-row justify-even w-screen">
    <div class="flex flex-row md:flex-col w-screen">
      <div class="pt-6">
      <img src="@/assets/images/image-product-1.jpg" alt="product-image" class=" prd-img lg:rounded-lg">
    </div>
    <div class=" hidden sm:flex md:flex-row justify-between py-6 w-1/2 lg:mx-auto">
      <img src="@/assets/images/image-product-1.jpg" alt="product--image" class="w-1/5 prd-img-sel">
      <img src="@/assets/images/image-product-2.jpg" alt="product-image" class="w-1/5 prd-img-sel">
      <img src="@/assets/images/image-product-3.jpg" alt="product-image" class="w-1/5 prd-img-sel">
      <img src="@/assets/images/image-product-4.jpg" alt="product-image" class="w-1/5 prd-img-sel">
    </div>
    </div>
    <div>
    <div class=" md:text-justify text-left home-content">
      <p class="text-orange font-bold text-sm pb-2 pt-8">SNEAKER COMPANY</p>
      <p class=" font-bold sm:text-2xl lg:text-3xl pb-6">Fall Limited Edition <br> Sneakers <br/></p>
      <p class=" w-3/4 pb-6 text-sm leading-loose font-light">
      These low profile sneakers are your perfect casual wear 
      companion.Featuring a duarble rubber outer sole,
      they'll withstand everything the weather can offer
      </p>
      <div class="price-mobile">
      <p class=" pb-2 font-bold text-2xl text-justify">$125.00 <span class=" text-orange px-4 brd bg-gray-50 text-sm shadow-sm">50%</span></p>
      <p class=" pb-2 text-gray-400 line-through">$250.00</p>
      </div>
    </div>
    <div class="pt-4 btn-mobile ">
      <div class="qty-counter flex justify-start btn bg-gray-200 px-10 py-3 shadow-lg">
        <button class=" px-5 text-orange btn text-left" @click="counter--">-</button>
        {{counter <=0 ? 0 : counter }}
        <button class="px-5  text-orange btn text-right" @click="counter++">+</button>
      </div>
      <button class="md:mr-14 px-10 py-3 bg-orange rounded-md text-white" @click="addToCart">
         <!-- <img src="@/assets/images/icon-cart.svg" alt="cart" class="img-cart px-2 text-white "> -->
         <font-awesome-icon icon="fa-solid fa-cart-shopping"  class="img-cart px-2 text-white"/>
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
 @media screen and (max-width: 750px) {
  .prd-img{
  width: 100%;
  } 
  .home-content{ 
    margin-left: 20px;
  }
  .price-mobile{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
  }}

  @media screen and (max-width: 500px) {
    .btn-mobile{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  .prd-img{
  width: 100%;
  } 
  }
</style>