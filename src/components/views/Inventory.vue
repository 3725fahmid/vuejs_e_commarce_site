<template>
    <div v-if="!loading" class="row gap-2">
        <!-- card Start -->
        <div v-for="(item,index) in items" :key="index" class="card" style="width: 15rem;">
          <img :src="item.photo" class="card-img-top" alt="...">
          <div class="card-body">
              <router-link :to="{path:'/iteminfo/'+item.id}">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">${{ item.price }}</p>
              </router-link>
                <button @click="addToCart(item)" class="btn btn-primary">Add to Cart</button>
              </div>
        </div>
         <!-- card End -->
      </div>
      <div  v-else class="spinner-grow text-primary sb" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      
</template>











<script>

import axios from 'axios';

export default{
  // props:["items"],
  data(){
    return {
      loading:true,
      // items:[]
    }
  },computed:{
    items(){
      return this.$store.getters.getInventory
    }
  },
  mounted(){
    this.fetchInventory()
  },
  methods:{
    addToCart(item){
      // this.$emit("addNewItem",item)
      // this.$store.commit('addCartItem',item)
      this.$store.dispatch('addTheCart',item)
    },
    fetchInventory(){
      var myData = this
      axios.get('http://localhost:3000/items').then(response => {
        setTimeout(()=>{
          // myData.items = response.data,
          myData.$store.commit('setInventory',response.data)
          myData.loading = false
        },300)
      })
    }
  }
}
</script>














<style>
a{
  text-decoration: none;
}
.card-img-top{
  width: 100%;
  height: 250px;
  padding: 5px;
  border-radius: 15px 15px 0 0 ;
}
.sb{
  width: 150px;
  height: 150px;
  margin-left: 300px;
  margin-top: 150px;
}
</style>