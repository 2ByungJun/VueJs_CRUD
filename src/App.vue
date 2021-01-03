<template>
  <v-app>

    <div class="layout-top">
      <!-- <v-img
        src="@/img/banner.png"
        max-height="200"
        max-width="50%"
      ></v-img> -->
    </div>

    <div class="layout-center">
      <!-- Menu -->
      <div class="menuArea">
        <div class="menu">
          <Menu />
        </div>
      </div>
      <!-- Content -->
      <div class="content">
        <router-view/>
      </div>
    </div>
    
  </v-app>
</template>

<script>
import Menu from '../src/views/Menu.vue'

export default {
  components:{
    Menu,
  }
}
</script>

<style>
  div.layout-top{
    width: 100%;
    text-align: -webkit-right;
  }
  div.layout-center{
    display: inline-flex;
    width: 90%;
    height: 90%;
    align-self: center;
    margin: 15px;
  }
  div.menuArea{
    margin-top: 13px;
    width: 20%;
  }
  div.menu{
    width: 18%;
    position: fixed;
  }
  div.content{
    width: 80%
  }
</style>