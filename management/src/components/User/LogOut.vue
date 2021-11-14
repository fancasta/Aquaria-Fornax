<template>
    <button @click="submit" v-if="user" class="btn btn-warning btn-sm">Log Out</button>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default {   
    data() {
        return {
            user:false, 
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.user = user;      
        }
    })
    },

    methods: {
        submit() {
            const auth = getAuth();      
            signOut(auth).then(() => this.$router.push({name:'LoginPage'})) 
        }       
    } 
};
</script>

<style>

</style>