<template>
    <h1>Project Information</h1>
    Project name: {{project_name}}
    <br>
    Description: {{description}}
    <br>
    Manager Name: {{manager_name}}
    <br>
    Manager Email: {{manager_email}}
</template>

<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "ManagerDashboard", 
    components: {
        
    }, 
    data(){
        return{
            email:"",
            project_name:"", 

            description:"",
            manager_name:"",
            manager_email:"", 
            project_member:[], 
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
        this.display();
        });
    },

    methods: {
        async display() {
            let project_name = this.$route.query.project_name
            let projectDoc = await getDoc(doc(db, "projects", project_name))
            let projectData = projectDoc.data()
            this.project_name = projectData.project_name 
            this.description = projectData.description
            this.manager_name = projectDoc.manager_name
            this.manager_email = projectData.manager_email 
        }           
    }
}
</script>

<style>

</style>