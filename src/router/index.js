import { createRouter, createWebHashHistory } from 'vue-router'
import ItemDetails from   '../components/views/ItemDetails.vue'
import Home from '../components/views/Home.vue'
import Inventory from '../components/views/Inventory.vue'

 const routes = [
    {
        name:"Home",
        component:Home,
        path:'/home'
    },
    {
        name:"Inventory",
        component:Inventory,
        path:'/'
    },
    {
        name:"ItemDetails",
        component:ItemDetails,
        path:'/iteminfo/:id'
    },
]

const router =  createRouter( {
    history:createWebHashHistory(),
    routes,
})

export default router