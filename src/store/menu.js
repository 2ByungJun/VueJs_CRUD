export default {
    namespaced: true, 
    state: () => ({
        items: [
            { title: '로그인', icon: 'mdi-account-outline', link: '/' },
            { title: '제품', icon: 'mdi-animation', link: '/main' },
            { title: '영화검색', icon: 'mdi-cloud-search', link: '/movie' },
            { title: '설정', icon: 'mdi-settings', link: '/setting' },
        ],
    }),
    mutations: {
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