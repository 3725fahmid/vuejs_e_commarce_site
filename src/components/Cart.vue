<template>
        <ul class="list-group">
            <li class="list-group-item">
              <span class="item-name">Name</span>
              <span class="item-price">Price</span>
            </li>
            <hr>

            <li v-for="(item,index) in items" :key="index" class="list-group-item">
              <button @click="removeItem(index)" class="btn btn-danger">-</button>
              <span class="item-name">{{ item.title }}</span>
              <span class="item-price">${{item.price}}</span>
            </li>
            <hr>

            <li class="list-group-item">
              <span class="item-name">Total</span>
              <span class="item-price">${{ addTotalPrice }}</span>
            </li>
            <li v-if="items.length>0" class="list-group-item">
              <button @click="chackOut" class="btn btn-success w-100">Chack out</button>
            </li>
            
          </ul>
</template>

<script>
export default{
  // props:['items'],
  computed:{
    items(){
      return this.$store.getters.getCart
    },
    addTotalPrice() {
      var total = 0
      this.items.forEach(elm => {
        total += parseFloat(elm.price)
      })
      return total.toFixed(2)
    }
  },
  methods:{
    removeItem(index){
      this.$store.commit('itemRemove',index)
    },
    chackOut(){
      if(confirm("Are you sure you want to chackout")){
        this.$store.commit('clearCart')
      }
    }
  }
}

</script>

<style>

.list-group-item{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-price{
  color: rgb(66, 119, 12);
}
</style>