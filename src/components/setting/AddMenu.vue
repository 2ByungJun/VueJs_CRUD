<template>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
    <v-text-field
        v-model="name"
        :counter="6"
        :rules="nameRules"
        label="메뉴명"
        required
    ></v-text-field>

    <v-text-field
        v-model="link"
        :rules="urlRules"
        label="URL"
        required
    ></v-text-field>

    <v-btn
        :disabled="!valid"
        color="success"
        class="mt-4 mr-4"
        @click="validate"
    >
        추가
    </v-btn>

    <v-btn
        color="error"
        class="mt-4 mr-4"
        @click="reset"
    >
        리셋
    </v-btn>

    </v-form>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || '메뉴명은 필수입니다.',
            v => (v && v.length <= 6) || '최대 6자까지 가능합니다.',
        ],
        link: '',
        linkRules: [
            v => !!v || 'URL은 필수입니다.',
        ],
        items: [],
        item: {
            title: '',
            icon: '',
            link: ''
        },
    }),
    methods: {
        validate () {
            if(this.$refs.form.validate()){
                this.addMenu()
            }
        },
        reset () {
            this.$refs.form.reset()
        },
        addMenu() {
            this.$store.commit('menu/pushIntoItems', {
                    title : this.name,
                    icon : 'mdi-menu',
                    link : this.link
            })
        }
    },
}
</script>