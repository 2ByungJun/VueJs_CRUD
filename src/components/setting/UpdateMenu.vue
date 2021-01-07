<template>
    <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
    >
    <template v-slot:top>
        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
            <v-card>
            <v-card-title>
                <span class="headline">메뉴 수정</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-text-field
                        v-model="editedItem.title"
                        label="메뉴명"
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-text-field
                        v-model="editedItem.link"
                        label="URL"
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="12"
                    md="4"
                    >
                    <v-text-field
                        v-model="editedItem.icon"
                        label="아이콘"
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    >
                    <v-text-field
                        v-model="editedItem.etc"
                        label="비고"
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="blue darken-1"
                text
                @click="close"
                >
                취소
                </v-btn>
                <v-btn
                color="blue darken-1"
                text
                @click="save"
                >
                저장
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
            <v-card-title class="headline">정말로 해당 메뉴를 삭제하시겠습니까?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">취소</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">삭제</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </template>
    <template v-slot:item.actions="{ item }">
        <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
        >
        mdi-pencil
        </v-icon>
        <v-icon
        small
        @click="deleteItem(item)"
        >
        mdi-delete
        </v-icon>
    </template>
    <template v-slot:no-data>
        <v-btn
        color="primary"
        @click="initialize"
        >
        Reset
        </v-btn>
    </template>
    </v-data-table>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            { text: '메뉴명', align: 'start', sortable: false, value: 'title' },
            { text: 'URL', value: 'link' },
            { text: '비고', value: 'etc' },
            { text: '수정/삭제', value: 'actions', sortable: false },
        ],
        editedItem: {
            title: '',
            link: '',
            icon: '',
            etc: ''
        },
        defaultItem: {
            title: '',
            link: '',
            icon: '',
            etc: ''
        }
    }),
    computed: {
        desserts(){
            return this.$store.state.menu.items
        }
    },
    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },
    methods: {
        editItem (item) {
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem (item) {
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
            this.item = item
        },
        deleteItemConfirm () {
            /* delete DB */
            this.$store.dispatch('menu/deleteMenu', this.editedItem)
            this.closeDelete()
        },
        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
            })
        },
        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
            })
        },
        save () {
            /* update DB */
            this.$store.dispatch('menu/updateMenu', this.editedItem)
            this.close()
        },
    },
}
</script>