<template>
    <div class="container shadow mt-3 p-5 col-10">
    <div class="d-flex justify-content-center m-2">
        <h2>Current task: {{task_name}} </h2>
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
            name:"",
            project_name:"",
            task_name:"",
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.email = user.email
            this.name = user.displayName
        } else {
            console.log("Sorry")
        }
        });
        this.getTaskName()
    },

    methods: {
        async getTaskName() {
            this.project_name = this.$route.query.project_name
            let projectInfo = await getDoc(doc(db, "projects", this.project_name))
            let projectData = projectInfo.data()
            let member_list = projectData.member_list
            this.task_name = member_list[this.name].task_name
        },

        async submit() {
            alert("Finish Task!")
            const projectDoc = doc(db, "projects", this.project_name);
            await updateDoc(projectDoc, {
                [`member_list.${this.name}.task_status`]: 1,
            });
        }
    },
}
</script>

<style>

</style>