<template>
    <h1>Project List</h1>
    <table id = "table" class = "auto-index">
        <tr>  
        <th>Index</th>
        <th>Project Name</th>       
        <th>Project Manager</th>
        <th>Position</th>
        </tr>
    </table><br><br>
</template>

<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "ManagerDashboard", 
    components: {
        
    }, 
    data(){
        return{
            email:"",
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
            let memberDoc = await getDoc(doc(db, "user", this.email))
            let projects = await getDocs(collection(db, "projects"))
            let leadingProjectList = memberDoc.data().leading_project
            let memberProjectList = memberDoc.data().member_project
            if (memberProjectList == undefined) {
                memberProjectList = []
            }
            if (memberProjectList == undefined) {
                memberProjectList = []
            }
            let ind = 1 
            projects.forEach((doc) => {
                let docData = doc.data()
                var project_name = docData.project_name
                if (leadingProjectList.includes(project_name) || memberProjectList.includes(project_name)) {
                    var table = document.getElementById("table")
                    var row = table.insertRow(ind)
                    var manager_email = docData.manager_email
                    var cell1 = row.insertCell(0); 
                    var cell2 = row.insertCell(1); 
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    cell1.innerHTML = ind; 
                    cell2.innerHTML = project_name; 
                    cell3.innerHTML = manager_email;

                    var move = document.createElement("button")
                    move.innerHTML ="Check out"
                    move.onclick =  ()=>{
                        this.checkout(project_name)
                    }
                    cell5.appendChild(move)

                    ind+= 1

                    if (leadingProjectList.includes(project_name)) {
                        cell4.innerHTML = "Leader";
                    } else {
                        cell4.innerHTML = "Member";
                    }
                } 
            })
        },

        checkout(project_name){      
            this.$router.push({ name: 'ProjectDisplay', query: { project_name: project_name } }) 
        }  
    },
}
</script>

<style>

</style>