<template>
    <div class="container shadow mt-3 p-5 col-10">
    <div class="d-flex justify-content-center m-2">
        <h1>Current task: {{task_name}} </h1>
    </div>
    

    <div class="d-flex justify-content-center">
        <button @click.prevent="submit" class="btn btn-primary col-6 m-2">Finish Task</button>
    </div>
    </div>
</template>

<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, updateDoc, getDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "AddMember", 
    components: {
        
    }, 
    data(){
        return{
            email:"",
            project_name:"",
            task_name:"",
            task_number:"",

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
        this.getBasicInfo()
        });
    },

    methods: {
        async getBasicInfo() {
            this.project_name = this.$route.query.project_name
            let projectDoc = await getDoc(doc(db, "projects", this.project_name))
            let projectData = projectDoc.data()
            let project_type = projectData.project_type

            let taskDoc = await getDoc(doc(db, "reference", project_type))
            let taskData = taskDoc.data()

            if (projectData.task1_user == this.email) {
                this.task_name = taskData.task1
                this.task_number = 1
            } else if (projectData.task2_user == this.email) {
                this.task_name = taskData.task2
                this.task_number = 2
            } else if (projectData.task3_user == this.email) {
                this.task_name = taskData.task3
                this.task_number = 3
            } else {
                this.task_name = taskData.task4
                this.task_number = 4
            }
        }, 
        async submit() {
            alert("Assign tasks successfully!")
            const projectDoc = doc(db, "projects", this.project_name);
            if (this.task_number == 1) {
                await updateDoc(projectDoc, {
                task1_status: 1,
                });
            } else if (this.task_number == 2) {
                await updateDoc(projectDoc, {
                task2_status: 1,
                });
            } else if (this.task_number == 3) {
                await updateDoc(projectDoc, {
                task3_status: 1,
                });
            } else {
                await updateDoc(projectDoc, {
                task4_status: 1,
                });
            }
        }
    },
}
</script>

<style>

</style>