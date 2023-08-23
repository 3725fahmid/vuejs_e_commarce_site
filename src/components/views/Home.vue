<template>
    <div>
        konok
        <h2>{{ $store.state.counter }}</h2>
        <button @click="increment" class="btn btn-info">Increment</button> 
    </div>
</template>

<script>
export default{
    methods:{
        increment(){
            this.$store.state.counter++
        }
    }

}

</script>

<style>

</style>