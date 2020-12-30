<template>
    <div class="container">
        <h1>오시는길</h1>
            <v-card>
                <v-responsive :aspect-ratio="4/1">
                <v-card-title>
                    <v-icon
                        large
                        left
                    >
                        mdi-map-marker-radius-outline
                    </v-icon>
                    <span class="title font-weight-light">회사위치</span>
                </v-card-title>
                <v-card-text>
                    <KakaoMap />
                </v-card-text>
                </v-responsive>
            </v-card>
    </div>
</template>

<script>
import KakaoMap from '../components/kakaoMap/KakaoMap.vue'

export default {
    components: {
        KakaoMap
    }
}
</script>
