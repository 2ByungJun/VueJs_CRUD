<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="10"
            class="elevation-1"
        ></v-data-table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
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
        ],
        desserts: [],
        }
    },
    created(){
        axios.post('/sfc/prduct/selectPrductList.json', {
            prductNo : "2222222222222222222222",
            prductNm : "이병준"
        }).then(res => {
            var data = res.data.data;
            console.log(data)
            this.desserts = data
        })
    },
    methods:{
        clickMe(){
            console.log("등록")
        }
    }
}
</script>