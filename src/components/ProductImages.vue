<template>
  <div class="pt-6">
      <img src="@/assets/images/image-product-1.jpg" alt="product-image" class=" prd-img lg:rounded-lg">
    </div>
    <div class=" hidden sm:flex md:flex-row justify-between py-6 w-1/2 lg:mx-auto">
      <img src="@/assets/images/image-product-1.jpg" alt="product--image" class="w-1/5 prd-img-sel">
      <img src="@/assets/images/image-product-2.jpg" alt="product-image" class="w-1/5 prd-img-sel">
      <img src="@/assets/images/image-product-3.jpg" alt="product-image" class="w-1/5 prd-img-sel">
      <img src="@/assets/images/image-product-4.jpg" alt="product-image" class="w-1/5 prd-img-sel">
    </div>
</template>

<script>

export default {

}
</script>


<style scoped>
.prd-img{
border-radius: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  min-width: 350px;
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
</style>