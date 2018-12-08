<template>
    <div class="signup">
        <h1>Sign-Up</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <br>
        <input type="text" name="email" v-model="input.email" placeholder="Email" />
        <br>
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <br>
        <input type="password" name="password" v-model="input.confirm" placeholder="Confirm Password" />
        <br>
        <button type="button" v-on:click="signup()">Sign-Up Now</button>
    </div>

</template>

<script>
    import axios from "axios";
 export default {
        name: 'Signup',
        data() {
            return {
                input: {
                    username: "",
                    email: "",
                    password: "",
                    confirm:"",
                }
            }
        },

        methods: {
            signup() {
            var link = "https://wt-a0f01f0b50faf36ea1feab5c1f6c544c-0.sandbox.auth0-extend.com/Aurora-mongoDB/submit/";
       
            if(this.input.username != "" && this.input.email != "" && this.input.password === this.input.confirm) {
                var newuser = {"name" : this.input.username,
                                "password" : this.input.password,
                                "email" : this.input.email
                };
                axios.post(link,newuser);
                this.$router.replace({name:"login"});
                }




            },
            },

        };
 
    </script>