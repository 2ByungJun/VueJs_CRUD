<template>
    <v-data-table
        :headers="headers"
        :items="desserts"
        sort-by="prductNo"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar
                flat
            >
                <v-toolbar-title>제품</v-toolbar-title>
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog
                    v-model="dialog"
                    max-width="500px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                        >
                        제품등록
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
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
                                v-model="editedItem.prductNo"
                                label="제품번호"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.prductNm"
                                label="제품명"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.prductSeNm"
                                label="구분"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.roxInclsAt"
                                label="rox 여부"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.msmixInclasAt"
                                label="mix 여부"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.prductPc"
                                label="가격"
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
                            Cancel
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="save"
                        >
                            Save
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
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
import axios from 'axios';

export default {
    data () {
        return {
            dialog: false,
            dialogDelete: false,
            dataList: "",
            headers: [
                {
                text: '제품번호',
                align: 'start',
                sortable: false,
                value: 'prductNo',
                },
                { text: '제품명', value: 'prductNm' },
                { text: '구분', value: 'prductSeNm' },
                { text: 'rox 여부', value: 'roxInclsAt' },
                { text: 'mix 여부', value: 'msmixInclasAt' },
                { text: '가격', value: 'prductPc' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                prductNo: '',
                prductNm: '',
                prductSeNm: '',
                roxInclsAt: 'N',
                msmixInclasAt: 'N',
                prductPc: '',
            },
            defaultItem: {
                prductNo: '',
                prductNm: '',
                prductSeNm: '',
                roxInclsAt: 'N',
                msmixInclasAt: 'N',
                prductPc: '',
            },
        }
    },
    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },
    watch: {
        dialog (val) {
            val || this.close()
        },
        dialogDelete (val) {
            val || this.closeDelete()
        },
    },
    created(){
        this.initialize()
    },
    methods:{
        initialize () {
            axios.post('/sfc/prduct/selectPrductList.json', {
                prductNo : "TESTTESTTEST",
                prductNm : "TEST이병준"
            }).then(res => {
                var data = res.data.data;
                console.log(data)
                this.desserts = data
            })
        },
        /// 수정 버튼을 클릭한 경우 실행
        editItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        /// 삭제 버튼을 클릭한 경우 실행
        deleteItem (item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },
        /// 삭제완료시, 실행
        deleteItemConfirm () {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
            /* JAVA axios delete 추가장소 */
        },
        /// 수정 팝업에서 취소하는 경우 실행
        close () {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        /// 삭제 팝업에서 취소하는 경우 실행
        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save () {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
                /* JAVA axios update 추가장소 */
            } else {
                this.desserts.push(this.editedItem)
                /* JAVA axios insert 추가장소 */
            }
            this.close()
        },
    }
}
</script>