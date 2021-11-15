<template>
    <div class="container shadow m-3 col-12">
    <div class="d-flex justify-content-center m-2">
        <h1>Assign Task</h1>
    </div>
    <label for="task1_user"><b>Assign Task 1</b> - {{task1_name}}</label>
    <select class="form-control m-1" id="task1_user" v-model="task1_user" required>
        <option v-for="member in member_list" :key="member.name" :value="member.name"> {{ member.name }}</option>
    </select>

    <label for="task2_user"><b>Assign Task 2</b> - {{task2_name}}</label>
    <select class="form-control m-2" id="task2_user" v-model="task2_user" required>
        <option v-for="member in member_list" :key="member.name" :value="member.name"> {{ member.name }}</option>
    </select>

    <label for="task3_user"><b>Assign Task 3</b> - {{task3_name}}</label>
    <select class="form-control m-2" id="task3_user" v-model="task3_user" required>
        <option v-for="member in member_list" :key="member.name" :value="member.name"> {{ member.name }}</option>
    </select>

    <label for="task4_user"><b>Assign Task 4</b> - {{task4_name}}</label>
    <select class="form-control m-2" id="task4_user" v-model="task4_user" required>
        <option v-for="member in member_list" :key="member.name" :value="member.name"> {{ member.name }}</option>
    </select>

    <div class="d-flex justify-content-center">
        <button @click.prevent="submit" class="btn btn-primary col-6 m-2">Assign Task</button>
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
            member_list: null,

            task1_name:"",
            task2_name:"",
            task3_name:"",
            task4_name:"",

            task1_user:"",
            task2_user:"",
            task3_user:"",
            task4_user:"",
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
            this.member_list = projectData.member_list

            let project_type = projectData.project_type
            console.log(project_type)
            let taskDoc = await getDoc(doc(db, "reference", project_type))
            let taskData = taskDoc.data()
            this.task1_name = taskData.task1
            this.task2_name = taskData.task2
            this.task3_name = taskData.task3
            this.task4_name = taskData.task4
        }, 
        async submit() {
            console.log("task4_user is", this.task4_user)
            if (this.task1_user == "" || this.task2_user == "" || this.task3_user == "" || this.task4_user == "") {
                alert("Please fill in all form")
            } else {
                alert("Assign tasks successfully!")
                const projectDoc = doc(db, "projects", this.project_name);
                await updateDoc(projectDoc, {
                    [`member_list.${this.task1_user}.task`] : 1,
                    [`member_list.${this.task1_user}.task_name`]: this.task1_name,
                    [`member_list.${this.task2_user}.task`] : 2,
                    [`member_list.${this.task2_user}.task_name`]: this.task2_name,
                    [`member_list.${this.task3_user}.task`] : 3,
                    [`member_list.${this.task3_user}.task_name`]: this.task3_name,
                    [`member_list.${this.task4_user}.task`] : 4,
                    [`member_list.${this.task4_user}.task_name`]: this.task4_name,
                });
                location.reload()
            }
        }
    },
}
</script>

<style>

</style>