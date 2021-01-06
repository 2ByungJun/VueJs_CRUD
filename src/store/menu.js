import axios from 'axios'

export default {
    namespaced: true, 
    state: () => ({
        items: []
    }),
    mutations: {
        updateState(state, payload){
            state.items = payload
        },
    },
    actions: {
        async selectMenu({commit}){
            await axios.get('/vue/menu/selectMenu').then((res)=>{
                commit('updateState', res.data)
            })
        },
        async insertMenu({commit}, data){
            await axios.post('/vue/menu/insertMenu', {
                title : data.item.title,
                icon : data.item.icon,
                link : data.item.link,
                etc : data.item.etc
            }).then((res)=>{
                commit('updateState', res.data)
            })
        },
        async deleteMenu({commit}, data){
            await axios.post('/vue/menu/deleteMenu', {
                seq : data.item.seq
            }).then((res)=>{
                commit('updateState', res.data)
            })
        },
    },
    getters: {
    }
};