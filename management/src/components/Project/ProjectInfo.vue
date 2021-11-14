<template>
    <div class="container col-12 mt-3">
        <h2 class="card-header">{{project_name}}</h2>
        <p class="card-title">Manager Info: {{manager_name}} - {{manager_email}}</p>
        <p class="card-title">From {{start_date}} to {{end_date}}</p>
        <p class="card-text">Description: {{description}}</p>
    </div>
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
            start_date:"",
            end_date:"",            
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
            this.manager_name = projectData.manager_name
            this.manager_email = projectData.manager_email 
            this.start_date = projectData.start_date
            this.end_date = projectData.end_date
        }           
    }
}
</script>

<style>

</style>