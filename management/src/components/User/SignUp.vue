<template>
    <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
    <div class="container shadow mt-3 p-5">
    <h2>Register</h2>
    <form> 
        <div>
            <label for="username">Username:</label>
            <br><input class="form-control" type="text" id="username" v-model="username">
        </div>

        <br>
        <div>
            <label for="email">Email:</label>
            <br><input class="form-control" type="email" id="email" v-model="email">       
        </div>

        <br>
        <div>
        <label for="role">Choose your role:</label>
        <br>
        <select class="form-control" id="role" v-model="role">
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Member">Member</option>
        </select>
        </div>
        <br>
        <div>
            <label for="password">Password:</label>
            <br><input class="form-control" type="password" id="password" v-model="password">       
        </div>     
        <br>   
        <div>
            <button class="btn btn-primary mb-2" @click.prevent="submit">Register</button>
            <p>Already have an account? <router-link to="/">Login here!</router-link></p>
        </div>


    </form>
    </div>
    </div>
    <div class="col-3"></div>
    </div>
</template>


<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

export default {
    data() {
        return {
            username: "",
            email: "",
            role: "",
            password: "",
            error: null
        }
    }, 

    methods: {
        submit() {
            if (this.username == "" || this.email == "" || this.password == "") {
                this.error = "Please fill in all fields"
                alert(this.error)
            } else {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth,this.email, this.password)
                .then((userCredential) => {
                    const user = userCredential.user
                    updateProfile(user, {
                        displayName: this.username
                    })
                }).catch(err => {
                    this.error = err.message;
                    if (this.error != null) {
                        alert(this.error)
                    }
                }).then(() => {
                    if (this.error == null) {
                        alert("Your account has been successfully created!")
                        setDoc(doc(db, "user", this.username), {
                            role: this.role, 
                            name: this.username,
                            email: this.email,
                        })
                        this.$router.push({path: './'})
                    }
                });
            }
        }
    }
}

</script>

<style> 

</style>
