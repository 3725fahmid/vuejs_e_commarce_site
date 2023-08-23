<template>
    <div v-if="item" class="row border p-3">
        <div class="col-5">
            <img :src="item.photo" alt="">
        </div>
        <div class="col-7 border rounded p-1">
            <ul>
                <li>{{ item.title }}</li>
                <li>{{ item.description }}</li>
                <li>{{ item.price }}</li>
            </ul>
            <a @click="addToCart(item)" class="btn btn-primary">Add to Cart</a>
        </div>
    </div>
    <div  v-else class="spinner-grow text-primary sb" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
</template>

<script>
import axios from 'axios'
    export default {
       data(){
        return {
            item: null
        }
       },mounted(){
        this.fetchItem()
       },
      methods:{
        fetchItem(){
            var myData = this
            axios.get('http://localhost:3000/item/'+this.$route.params.id).then(res =>{
                myData.item = res.data
            })
        },
        addToCart(item){
            this.$store.commit('addCartItem',item)
        }

      }
    }
</script>

<style lang="scss" scoped>

</style>