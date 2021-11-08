<template>
    <div class="container shadow mt-3 p-5 col-6">
    <div class="d-flex justify-content-center m-2">
        <h1>Update on progress</h1>
    </div>   
    <label for="update">Update message</label>
    <textarea class="form-control m-1" type="text" id="update" v-model="update" placeholder="Type in update message"></textarea>     
    <div class="d-flex justify-content-center">
        <button @click.prevent="submit" class="btn btn-primary col-6 m-2">Submit</button>
    </div>
    </div>
</template>

<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, updateDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "UpdateMessage", 
    components: {
        
    }, 
    data(){
        return{
            email:"",
            project_name:"",
            update:"",
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.email = user.email
            console.log(this.email)
        } else {
            console.log("Sorry")
        }
});
    },

    methods: {
        async submit() {
            alert("Add new member successfully!")
            this.project_name = this.$route.query.project_name
            const projectDoc = doc(db, "projects", this.project_name);
            await updateDoc(projectDoc, {
                update : this.update
            });
        }
    },
}
</script>

<style>

</style>