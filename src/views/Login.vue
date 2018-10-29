<template>
  <div class="login">
    <Loginscreen/>
  </div>
</template>

<script>
// @ is an alias to /src
import Loginscreen from "@/components/Loginscreen.vue";

export default {
  name: "Loginscreen",
  components: {
    Loginscreen
  }
};
</script>