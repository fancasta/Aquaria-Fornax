<template>
    <div class="container shadow mt-3 p-5 col-10">
    <div class="d-flex justify-content-center m-2">
        <h1>Task list</h1>
    </div>
    <table id = "table" class="table table-striped thead-dark table-hover">
        <thead>
            <tr>  
            <th>Index</th>
            <th>Member Name</th>
            <th>Member email</th>
            <th>Member task</th>
            <th>Task status</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    </div>
</template>

<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore"
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
        this.display()
        });
    },

    methods: {
        async display() {
            this.project_name = this.$route.query.project_name
            let projectDoc = await getDoc(doc(db, "projects", this.project_name))
            let projectData = projectDoc.data()
            let member_list = projectData.member_list
            var ind = 1
            console.log(member_list)
            for (var member in member_list) {
                console.log("value of member is", member, typeof(member))
                console.log("value of member_list.member", member_list[member])
                var table = document.getElementById("table")
                var row = table.insertRow(ind)
                var cell1 = row.insertCell(0); 
                var cell2 = row.insertCell(1); 
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4)
                cell1.innerHTML = ind; 
                cell2.innerHTML = member_list[member].name; 
                cell3.innerHTML = member_list[member].email;
                ind+=1
                if (member_list[member].task != 0) {
                    cell4.innerHTML = member_list[member].task_name
                } else {
                    cell4.innerHTML = "No task assigned"
                }

                if (member_list[member].task_status == 1) {
                    cell5.innerHTML = "Finished"
                } else {
                    cell5.innerHTML = "Unfinished"
                }
            }
        },
    }
}

</script>

<style>

</style>