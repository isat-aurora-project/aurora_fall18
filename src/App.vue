<template>
  <ion-app>
    <ion-header style="text-align: center;"> 
      <ion-toolbar style="text-align: center;">
        <ion-segment>
          <ion-title><router-link v-if="authenticated" to="/home" replace><h1><ion-button-segment> Home </ion-button-segment></h1></router-link></ion-title>
          <ion-title><router-link v-if="authenticated" to="/upload"><h1> Upload </h1></router-link></ion-title>
          <ion-title><router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace><h1> Logout </h1></router-link></ion-title>
        </ion-segment>
      </ion-toolbar>
    </ion-header> 
    <router-view @authenticated="setAuthenticated"/>
  </ion-app>

</template>

<script>
import axios from "axios";

export default {
  name:'App',
  data(){
    return {
      authenticated: false,
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
