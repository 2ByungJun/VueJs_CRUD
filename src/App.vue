<template>
  <v-app>
    <div class="display">
      <!-- Menu -->
      <div class="menuArea">
        <div class="menu">
          <v-img
            src="@/img/logo.png"
            max-height="100"
            max-width="130"
          ></v-img>
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
  h1{
    text-align: center;
  }
  div.display{
    display: inline-flex;
    width: 90%;
    height: 90%;
    align-self: center;
    margin: 20px;
  }
  div.menuArea{
    width: 20%
  }
  div.menu{
    width: 18%;
    position: fixed;
  }
  div.content{
    width: 80%
  }
</style>