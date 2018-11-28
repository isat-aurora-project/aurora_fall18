<template>
    <ion-content padding="true" class="manual-ios-statusbar-padding">
        <div class="spacer" style="width: 300px; height: 60px;"></div>
        <div>
        <img src="img/UpMXuuD3RRmVOyUcWSi2_aurora.png" style="display: block; width: auto; height: auto; margin-left: auto; margin-right: auto;">
        </div>
        <form id="login-form1" class="list">
        <ion-list id="login-list1">
            <ion-item>
            <ion-label class="item item-input" id="login-input1" style="display: block; width: 300px; height: 49px; margin-left: auto; margin-right: auto;">
            <span class="input-label">Username </span>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            </ion-label>
            </ion-item>
            <ion-item>
            <ion-label class="item item-input" id="login-input2" style="display: block; width: 300px; height: 49px; margin-left: auto; margin-right: auto;">
            <span class="input-label">Password </span>
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            </ion-label>
            </ion-item>
        </ion-list>
        <div class="spacer" style="width: 300px; height: 40px;"></div>
        <ion-button type="button" v-on:click="login()" id="login-button1" class="button button-stable button-block" style="display: block; width: 310px; height: 57px; margin-left: auto; margin-right: auto;">Login</ion-button>
        
        <div class="spacer" style="height: 40px;"></div>
        <div>
            <img src="img/cise-logo.jpg" style="display: block; width: auto; height: auto; margin-left: auto; margin-right: auto;">
        </div>
        </form>
    </ion-content>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "home" });
        } else {
          alert("The username and / or password is incorrect");
        }
      } else {
        alert("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>
