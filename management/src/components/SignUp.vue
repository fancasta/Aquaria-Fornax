<template>
    <h2>Register</h2>
      <form> 
        <div>
            <label for="username">Username:</label>
            <br><input type="text" id="username" v-model="username">
        </div>

        <br>
        <div>
            <label for="email">Email:</label>
            <br><input type="email" id="email" v-model="email">       
        </div>

        <br>
        <div>
        <label for="role">Choose your role:</label>
        <br>
        <select id="role" v-model="role">
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Member">Member</option>
        </select>
        </div>
        <br>

        <br>
        <div>
            <label for="password">Password:</label>
            <br><input type="password" id="password" v-model="password">       
        </div>
        <br>
        
        <div>
            <button @click.prevent="submit">Register</button>
        </div>

        <div>
            <p>Already have an account? <router-link to="/">Login here!</router-link></p>
        </div>

      </form> 
</template>


<script>
import firebaseApp from '../firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

export default {
    data() {
        return {
            username: "",
            email: "",
            role: "",
            password: ""
        }
    }, 

    methods: {
        submit() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth,this.email, this.password)
            .then(()=> {
                    alert("Your account has been successfully created!")
                    setDoc(doc(db, "user", this.email), {
                        role: this.role, 
                        name: this.username,
                        email: this.email,
                        password: this.password
                    })
                    this.$router.push({path: './'})
            });
        }
    }
}

</script>

<style> 

</style>
