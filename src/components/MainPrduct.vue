<template>
    <div>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="10"
            class="elevation-1"
        ></v-data-table>
        <p>{{textP}}</p>
        <button type="button" @click="clickMe">aa</button>
    </div>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
import axios from 'axios';

export default {
     data () {
      return {
        dataList: "",
        textP: "기존 글 입니다.",
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
        axios.post('/sfc/prduct/selectPrductList.json').then(res => {
            var data = res.data.data;
            console.log(data)
            this.desserts = data
        })
    },
    methods:{
        clickMe(){
            this.textP = "안녕?"
        }
    }
}
</script>

<style>
    
</style>