<template>
<Header />
  <router-view/>
</template>


<script>
import Header from '@/components/header.vue'



export default{
  components : {
    Header
  },
  data () {
    return {
      cart: [
        {
          name: '',
          price: '',
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bm-menu{
  background-color: #ffff !important;
}
.line-style{
  height: 10% !important;
}
.cross-style{
  left: 8px;
}
.bm-cross {
  background: black;
}
.bm-item-list {
  color: black;
  font-weight: 800;
}
</style>
