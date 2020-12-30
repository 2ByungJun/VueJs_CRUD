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
        <v-list>
            <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>

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
export default {
    computed: {
        items(){
            return this.$store.state.menu.items
        }
    },
}
</script>