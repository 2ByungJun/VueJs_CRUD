import axios from 'axios'

export default {
    namespaced: true, 
    state: () => ({
        items: [
            // { title: '소개', icon: 'mdi-account', link: '/introduce', etc: 'Facebook Graph API 사용'},
            // { title: '로그인', icon: 'mdi-account-outline', link: '/', etc: 'axios 사용' },
            // { title: '제품', icon: 'mdi-animation', link: '/main', etc: 'proxy, axios 사용' },
            // { title: '영화검색', icon: 'mdi-cloud-search', link: '/movie', etc: 'axios, store, vuex의 이해' },
            // { title: '설정', icon: 'mdi-settings', link: '/setting', etc: 'store를 이용한CRUD, 양방향 바인딩' },
            // { title: '오시는길', icon: 'mdi-map', link: '/way', etc: 'KakaoMap API 사용'},
        ]
    }),
    mutations: {
        async initMenuData(state){
            await axios.get('/vue/menu/selectMenu').then((res)=>{
                state.items = res.data
            })
        },
        updateState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        pushIntoItems(state, items){
            state.items.push(items)
        },
    },
    actions: {
    },
    getter: {
    }
};