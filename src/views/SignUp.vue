<template>
    <div class="signup">
        <h1>Sign-Up</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <input type="password" name="password" v-model="input.password" placeholder="Confirm Password" />
        <button type="button" v-on:click="submit()">Sign-Up Now</button>
    </div>

</template>
