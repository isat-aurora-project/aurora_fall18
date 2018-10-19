<template>
  <div class="home">
    <img alt="Aurora" src="../assets/aurora.png">
    <HelloWorld msg="Welcome to ISAT 345 Aurora Project"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
