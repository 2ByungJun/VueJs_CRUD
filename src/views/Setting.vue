<template>
    <div class="container">
        <v-card :style="m10">
            <v-responsive :aspect-ratio="4/1">
            <v-card-title>
                <v-icon
                    large
                    left
                >
                    mdi-comment-plus-outline
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
                    mdi-comment-edit-outline
                </v-icon>
                <span class="title font-weight-light">메뉴 수정</span>
            </v-card-title>
            <v-card-text>
                <UpdateMenu />
            </v-card-text>
            </v-responsive>
        </v-card>
    </div>
</template>

<script>

import AddMenu from '../components/setting/AddMenu.vue'
import UpdateMenu from '../components/setting/UpdateMenu.vue'

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
        UpdateMenu,
    }
}
</script>
