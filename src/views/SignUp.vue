<template>
    <ion-content padding="true" class="has-header-false">
        <div class="signup">
            <img src="img/UpMXuuD3RRmVOyUcWSi2_aurora.png" style="display: block; width: auto; height: auto; margin-left: auto; margin-right: auto;">
            <h1 style="text-align: center; display: block; width: 310px; height: 57px; margin-left: auto; margin-right: auto;">Sign-Up</h1>
            <input style="display: block; width: 300px; height: 47px; margin-left: auto; margin-right: auto;" type="text" name="username" v-model="input.username" placeholder="Username" />
            <br>
            <input style="display: block; width: 300px; height: 47px; margin-left: auto; margin-right: auto;" type="text" name="email" v-model="input.email" placeholder="Email" />
            <br>
            <input style="display: block; width: 300px; height: 47px; margin-left: auto; margin-right: auto;" type="password" name="password" v-model="input.password" placeholder="Password" />
            <br>
            <input style="display: block; width: 300px; height: 47px; margin-left: auto; margin-right: auto;" type="password" name="password" v-model="input.confirm" placeholder="Confirm Password" />
            <br>
            <ion-button type="button" style="display: block; width: 310px; height: 57px; margin-left: auto; margin-right: auto;" class="button button-stable button-block" v-on:click="signup()">Sign-Up Now</ion-button>
        </div>
    </ion-content>
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