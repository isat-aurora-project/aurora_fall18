<template>
  <ion-content padding="true" class="has-header">
    <div class="home" >
      <img alt="Aurora" src="../assets/aurora.png" style="display: block; width: auto; height: auto; margin-left: auto; margin-right: auto;">
      <HelloWorld msg="Welcome to the ISAT 345 Aurora Project" style="text-align: center;"/>
    </div>
  </ion-content>
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
