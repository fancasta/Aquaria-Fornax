<template>
    <img class="mx-auto d-block" id = "bg" src="@/assets/logo.png" alt="">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <div class="container shadow mt-3 p-5">
            <h1>Login</h1>
            <div>
                <label for="email">Email</label>
                <br><input class="form-control" type="email" id="email" name="email" v-model="email"/>       
            </div>
            <br>
            <div>
                <label for="password">Password</label>
                <br><input class="form-control" type="password" id="password" v-model="password"/>       
            </div>

            <br>
            <button @click.prevent="submit" class="btn btn-primary">Login</button>
            <button @click.prevent="reRoute" class="btn btn-outline-success m-1">Sign up now</button>
            </div>
        </div>
        <div class="col-3"></div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {   
    data() {
        return {
            email: "",
            password: "",
            error:""
        }
    }, mounted() {
        
    },

    methods: {
        submit() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password).then(() => this.$router.push({name:'Home'}))
            .catch(err => {
                this.error = err.message;
                if (this.error != null) {
                    alert(this.error)
                }
            })
        }, 
        reRoute() {
            this.$router.push({name:'Register'})
        }
    } 
};
</script>

<style>

</style>