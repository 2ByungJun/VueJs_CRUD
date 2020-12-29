<template>
    <div class="container">
        <h1>설정</h1>
            <v-card :style="m10">
                <v-responsive :aspect-ratio="4/1">
                <v-card-title>
                    <v-icon
                        large
                        left
                    >
                        mdi-plus
                    </v-icon>
                    <span class="title font-weight-light">메뉴 추가</span>
                </v-card-title>
                <v-card-text>
                    <AddMenu />
                </v-card-text>
                </v-responsive>
            </v-card>
            <v-card :style="m10">
                <v-responsive :aspect-ratio="4/1">
                <v-card-title>
                    <v-icon
                        large
                        left
                    >
                        mdi-twitter
                    </v-icon>
                    <span class="title font-weight-light">Twitter</span>
                </v-card-title>
                <v-card-text>
                    
                </v-card-text>
                </v-responsive>
            </v-card>
    </div>
</template>

<script>
import AddMenu from '../components/AddMenu.vue'

export default {
    data(){
        return{
            m10:{
                margin: '10px'
            }
        }
    },
    components:{
        AddMenu,
    }
}
</script>
