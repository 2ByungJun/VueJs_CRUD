<template>
    <v-card
        flat
        tile
        >
        <v-toolbar
        color="cyan"
        dark
        >
        <v-icon 
        class="mr-3"
        >mdi-vuejs</v-icon>

        <v-toolbar-title>BJ API INTRODUCE</v-toolbar-title>

        <v-spacer></v-spacer>
        
        </v-toolbar>

        <v-container
        v-for="type in types"
        :key="type"
        class="grey lighten-4"
        fluid
        >
        <v-subheader>{{ type }}</v-subheader>

        <v-row>
            <v-spacer></v-spacer>
            <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
            sm="6"
            md="4"
            >
            <v-card>
                <v-img
                :src="`https://picsum.photos/200/300?image=${getImage()}`"
                height="300px"
                >
                <span
                    class="headline white--text pl-4 pt-4 d-inline-block"
                    v-text="card"
                ></span>
                </v-img>

                <v-card-actions class="white justify-center">
                <v-btn
                    v-for="(social, i) in socials"
                    :key="i"
                    :color="social.color"
                    v-on:click="onClickLink(social.link)"
                    class="white--text"
                    fab
                    icon
                    small
                >
                <v-icon
                >{{ social.icon }}</v-icon>
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        types: ['FACEBOOK', 'INSTAGRAM'],
        cards: ['🥇', '🥈', '🥉'],
        socials: [
            {
            icon: 'mdi-facebook',
            color: 'indigo',
            link: 'https://www.facebook.com/profile.php?id=100006057602357',
            },
            {
            icon: 'mdi-vuejs',
            color: 'green darken-1',
            link: 'https://velog.io/@ieed0205',
            },
            {
            icon: 'mdi-instagram',
            color: 'red lighten-3',
            link: 'https://www.instagram.com/2_byung_jun/',
            },
        ],
    }),

    methods: {
        getImage () {
            const min = 550
            const max = 560

            return Math.floor(Math.random() * (max - min + 1)) + min
        },
        onClickLink(link){
            window.open(link, '_blank')
        }
    },
}
</script>

<style>

</style>