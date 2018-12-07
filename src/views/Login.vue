<template>
    <div class="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
        <br>
        <br>
        <button type="button" v-on:click="signup()">Sign-Up</button>
    </div>
    
    

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
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>


