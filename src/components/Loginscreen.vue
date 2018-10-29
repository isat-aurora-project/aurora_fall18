<template>
  <div class="login">
    <div class="form">
        <form class="register-form">
          <input type="text" placeholder="user name"/>
          <input type="text" placeholder="password"/>
          <input type="text" placeholder="email id"/>
          <button> Create</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loginscreen",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>