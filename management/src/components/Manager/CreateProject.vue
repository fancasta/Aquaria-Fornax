<template>
    <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
    <div class="container shadow mt-3 p-5">
    <div class="d-flex justify-content-center">
        <h1>Create Project</h1>
    </div>
    <label for="project_name">Project Name</label>
    <input class="form-control m-1" type="text" id="project_name" v-model="project_name">      
    <label for="project_id">Project ID:</label>
    <input class="form-control m-1" type="number" id="project_id" v-model="project_id">
    <label for="project_type">Project Type:</label>
    <select class="form-control m-1" id="project_type" v-model="project_type">
        <option value="Consumer & Market Research">Consumer & Market Research</option>
        <option value="Drafting Marketing campaign">Drafting Marketing campaign</option>
        <option value="E-commerce and Digital marketing plan">E-commerce and Digital marketing plan</option>
        <option value="Packaging and Product tesing">Packaging and Product testing</option>
    </select>
    <label for="description">Description</label>
    <textarea class="form-control m-1" type="text" id="description" v-model="description" placeholder="Type in a brief summary of the project"></textarea>       
    <label for="start_date">Start date:</label>
    <input class="form-control m-1" type="date" id="start_date" v-model="start_date">
    <label for="end_date">End date:</label>
    <input class="form-control m-1" type="date" id="end_date" v-model="end_date">
    <div class="d-flex justify-content-center">
        <button @click.prevent="submit" class="btn btn-primary col-6 m-2">Create project</button>
    </div>
    </div>
    </div>
    <div class="col-3"></div>
    </div>
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
            project_id:"",
            project_type:"",
            description:"",
            start_date: "",
            end_date: "",
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
            this.manager_name = managerDoc.data().name
            console.log(this.manager_name)
        },
        async submit() {
            alert("Create new project successfully!")
            await setDoc(doc(db, "projects", this.project_name), {
                manager_name: this.manager_name,
                manager_email: this.manager_email,
                project_name: this.project_name,
                project_type: this.project_type,
                description: this.description,
                start_date: this.start_date,
                end_date: this.end_date
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