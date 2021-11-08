<template>
    <button @click.prevent="submit" class="btn btn-primary">Log Out</button>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {   
    data() {
        return {

        }
    },

    methods: {
        submit() {
            const auth = getAuth();
            signOut(auth).then(() => this.$router.push({ path: '/' }))
        }       
    } 
};
</script>

<style>

</style>