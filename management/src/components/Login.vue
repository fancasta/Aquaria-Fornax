<template>
    <h1>Login</h1>
    <div>
        <label for="email">Email</label>
        <br><input type="email" id="email" name="email" v-model="email"/>       
    </div>
    <br>
    <div>
        <label for="password">Password</label>
        <br><input type="password" id="password" v-model="password"/>       
    </div>

    <br>
    <button @click.prevent="submit">Login</button>
    <button><router-link to="/register">Sign up now</router-link></button>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {   
    data() {
        return {
            email: "",
            password: ""
        }
    },

    methods: {
        submit() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password).then(() => this.$router.push({ path: './home' }))
        }       
    } 
};
</script>

<style>

</style>