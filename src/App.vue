<template>
  <ion-app>
    <ion-header style="text-align: center;">
      <ion-navbar class="bar-light">
        <ion-nav-back-button></ion-nav-back-button>
        <router-link v-if="authenticated" to="/home" replace>| Home |</router-link>
        <router-link v-if="authenticated" to="/upload"> Upload |</router-link>
        <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace> Logout |</router-link>
      </ion-navbar>
    </ion-header>
    <router-view @authenticated="setAuthenticated"/>
  </ion-app>

</template>

<script>
import axios from "axios";

  export default {
    name:'App',
    data(){
      return{
        authenticated: false,
      }
    },
    mounted(){
      if(!this.authenticated){
        this.$router.replace({ name: "login"});
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
