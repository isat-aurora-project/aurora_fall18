<template>
    <ion-content padding="true" class="has-header-false">
        <div class="spacer" style="width: 300px; height: 60px;"></div>
        <div>
        <img src="img/UpMXuuD3RRmVOyUcWSi2_aurora.png" style="display: block; width: auto; height: auto; margin-left: auto; margin-right: auto;">
        </div>
        <form id="login-form1" class="list">
        <ion-list id="login-list1">
            <ion-item>
            <ion-label class="list list-input" id="login-input1" style="display: block; width: 300px; height: 49px; text-align: center;">
            <span class="input-label">Username </span>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            </ion-label>
            </ion-item>
            <ion-item>
            <ion-label class="list list-input" id="login-input2" style="display: block; width: 300px; height: 49px; text-align: center;">
            <span class="input-label">Password </span>
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            </ion-label>
            </ion-item>
        </ion-list>
        <div class="spacer" style="width: 100px; height: 40px;"></div>
        <ion-button type="button" v-on:click="login()" id="login-button1" class="button button-stable button-block" style="display: block; width: 310px; height: 57px; margin-left: auto; margin-right: auto;">Login</ion-button>
        <div class="spacer" style="width: 300px; height: 10px;"></div>
        <ion-button type="button" v-on:click="signup()" id="login-button1" color="clear" class="button button-stable button-block" style="display: block; width: 310px; height: 57px; margin-left: auto; margin-right: auto;"><ion-label color="primary">Sign-Up</ion-label></ion-button>
        
        <div class="spacer" style="height: 20px;"></div>
        <div>
            <img src="img/cise-logo.jpg" style="display: block; width: auto; height: auto; margin-left: auto; margin-right: auto;">
        </div>
        </form>
    </ion-content>
</template>

<script>
import axios from "axios";
export default {
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            var link = "https://wt-a0f01f0b50faf36ea1feab5c1f6c544c-0.sandbox.auth0-extend.com/Aurora-mongoDB/search/";
            
            if(this.input.username != "" && this.input.password != "") {
                    link = link + this.input.username;
                    var result = axios.get(link)
                        .then(res => {
                            // handle the results
                            if (this.input.password === res.data.password) {
                                this.$emit("authenticated", true);
                                this.$router.replace({ name: "home" });
                            } else {
                                alert("The username and / or password is incorrect"); 
                            }
                        })
                        .catch(err => {
                            // handle error
                            alert("there was an http error: " + err.status);
                        });
                    //var result = JSON.link(link);
                // if(result != '' && this.input.password == result.password) {
                    //this.$emit("authenticated", true);
                    // this.$router.replace({ name: "home" });
                
            } else {
                alert("A username and password must be present");
            }
        },

        signup() {
            this.$router.replace({ name: "signup" });
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
