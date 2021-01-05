<template>
    <v-card
        class="mx-auto"
        height="500"
        width="256"
    >
        <v-navigation-drawer
        class="deep-purple accent-4"
        dark
        permanent
        >
        <MenuList />
        
        <template v-slot:append>
            <div class="pa-2">
            <v-btn block>
                로그아웃
            </v-btn>
            </div>
        </template>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
import MenuList from '../components/Menu/MenuList.vue'

export default {
    components: {
        MenuList
    }
}
</script>