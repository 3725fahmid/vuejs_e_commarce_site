<script>
import Navbar from './components/Navbar.vue';
// import Inventory from './components/Inventory.vue';
import Cart from './components/Cart.vue';
import data from './data.js'
export default {
  components: {
    Navbar, 
    // Inventory, 
    Cart
  },
  data(){
    return{
      items: [],
      cart:[]
    }
  },
  mounted(){
    this.items = data
  },
  methods:{
    addCartItem(item){
      this.cart.push(item)
    },
    removeItemFromCart(index){
       this.cart.splice(index,1)
    },
    searchResponse(keyword){
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    }
  }
}
</script>

<template>
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link> -->

  <Navbar @findresult="searchResponse"/>
  <div class="container">
    <div class="row">
      <div class="col-sm-9">
        <router-view></router-view>
        <!-- <Inventory @addNewItem="addCartItem" :items="items"/> -->
      </div>
      <div class="col-sm-3">
        <Cart @itemRemove="removeItemFromCart" :items="cart"/>
      </div>
    </div>
  </div>
</template>

<style >
.container {
  padding-top: 15px;
}
</style>
