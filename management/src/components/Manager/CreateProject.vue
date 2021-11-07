<template>
    <h1>Create Project</h1>
    <div>
        <label for="project_name">Project Name</label>
        <br><input type="text" id="project_name" v-model="project_name"/>       
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
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "CreateProject", 
    components: {
        
    }, 
    data(){
        return{
            manager_name:"",
            manager_email:"",
            project_name:"",
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
        this.getManagerName()
});
    },

    methods: {
        async getManagerName() {
            let managerDoc = await getDoc(doc(db, "user", this.manager_email))
            this.manager_name = managerDoc.data().manager_name
        },
        async submit() {
            alert("Create new project successfully!")
            await setDoc(doc(db, "projects", this.project_name), {
                project_name: this.project_name,
                manager_name: this.manager_name,
                manager_email: this.manager_email,
                description: this.description,
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