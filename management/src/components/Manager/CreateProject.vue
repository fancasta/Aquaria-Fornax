<template>
    <h1>Create Project</h1>
    <div>
        <label for="project_name">Project Name</label>
        <br><input type="text" id="project_name" v-model="project_name"/>       
    </div>
    <br>
    <div>
        <label for="leader_name">Leader Name</label>
        <br><input type="text" id="leader_name" v-model="leader_name"/>       
    </div>
    <br>
    <div>
        <label for="leader_email">Leader Email</label>
        <br><input type="email" id="leader_email" v-model="leader_email"/>       
    </div>
    <br>
    <div>
        <label for="description">Description</label>
        <br><input type="text" id="description" v-model="description"/>       
    </div>

    <br>
    <button @click.prevent="submit">Create project</button>
</template>

<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "CreateProject", 
    components: {
        
    }, 
    data(){
        return{
            manager_email:"",
            project_name:"",
            leader_name:"",
            leader_email:"",
            description:"",
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.manager_email = user.email
            console.log(this.manager_email)
        } else {
            console.log("Sorry")
        }
});
    },

    methods: {
        async submit() {
            alert("Create new project successfully!")
            await setDoc(doc(db, "projects", this.project_name), {
                project_name: this.project_name,
                leader_name: this.leader_name,
                leader_email: this.leader_email,
                manager_email: this.manager_email,
                description: this.description,
            });

            const leaderDoc = doc(db, "user", this.leader_email);
            await updateDoc(leaderDoc, {
                leading_project: arrayUnion(this.project_name)
            });

            const managerDoc = doc(db, "user", this.manager_email);
            await updateDoc(managerDoc, {
                managing_project: arrayUnion(this.project_name)
            });
        }
    },
}
</script>

<style>

</style>