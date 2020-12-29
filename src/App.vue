<template>
  <v-app>
    <!-- <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/main">Main</router-link> |
      <router-link to="/movie">Movie</router-link>
    </div> -->
    <div :style="display">
      <!-- Menu -->
      <div :style="menu">
        <Menu />
      </div>
      <!-- Content -->
      <div :style="content">
        <router-view/>
      </div>
    </div>
  </v-app>
</template>

<script>
import Menu from '../src/views/Menu.vue'

export default {
  data(){
    return {
      display: {
        display: 'inline-flex',
        width: '90%',
        height: '90%',
        alignSelf: 'center',
        margin: '20px',
      },
      menu: {
        
      },
      content:{
        width: '100%',
        //alignSelf: 'center'
      }
    }
  },
  components:{
    Menu,
  }
}
</script>

<style>
  h1{
    text-align: center;
  }
</style>