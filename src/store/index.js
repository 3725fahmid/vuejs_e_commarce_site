import { createStore } from 'vuex'
const store = createStore({
    state(){
        return {
            inventory:[],
            cart:[],
            counter: 0
        }
    },
    getters: {
        getInventory(state){
            return state.inventory
        },
        getCart(state) {
            return state.cart
        }
    },
    mutations: {
        setInventory(state,payload){
            state.inventory = payload
        },
        addCartItem(state, payload){
            state.cart.push(payload)
        },
        itemRemove(state,payload){
            state.cart.splice(payload,1)
        },
        clearCart(state){
            state.cart = []
        }
    },
    actions: {
        addTheCart(context,payload){
            context.commit('addCartItem',payload)
        }
    }
})

export default store