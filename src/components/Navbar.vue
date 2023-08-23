<template>
    <nav class="navbar navbar-expand-lg  bg-primary">
        <div class="container-fluid">
          <router-link class="navbar-brand" :to="{path:'/'}">ASWAM</router-link> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" :to="{path:'/'}">Home</router-link>
              </li>
            </ul>
            <form @submit.prevent="search" class="d-flex" role="search">
              <input v-model="keyword" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-info" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    search(){
      var self = this
      // this.$emit("findresult",this.keyword)
      axios.get('http://localhost:3000/search/' + this.keyword).then(res =>{
        console.log(res.data)
        self.$store.commit('setInventory',res.data)
      })
    }
  }
}
</script>

<style>

</style>