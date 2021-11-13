<template>
    <div class="container shadow mt-3 p-5 col-10">
    <div class="d-flex justify-content-center m-2">
        <h1>Project List</h1>
    </div>
    <div class="d-flex justify-content-center m-2">
    <table id = "table" class="table table-striped thead-dark table-hover">
        <thead>
            <tr>  
            <th>Index</th>
            <th>Project Name</th>       
            <th>Project Manager</th>
            <th>Start date</th>
            <th>End date</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </table><br><br>
    </div>
    </div>
</template>

<script>
import firebaseApp from '@/firebase.js'
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "ManagerDashboard", 
    components: {
        
    }, 
    data(){
        return{
            email:"",
            name:"",
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.email = user.email
            this.name = user.displayName
            console.log(this.email)
        } else {
            console.log("Sorry")
        }
        this.display();
});
    },

    methods: {
        async display() {
            let projects = await getDocs(collection(db, "projects"))
            let ind = 1 
            projects.forEach((doc) => {
                let docData = doc.data()
                var project_name = docData.project_name
                let member_list_name = docData.member_list_name
                if (member_list_name.includes(this.name)) {
                    var table = document.getElementById("table")
                    var row = table.insertRow(ind)
                    let manager_name = docData.manager_name
                    var cell1 = row.insertCell(0); 
                    var cell2 = row.insertCell(1); 
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    cell1.innerHTML = ind; 
                    cell2.innerHTML = project_name; 
                    cell3.innerHTML = manager_name;
                    cell4.innerHTML = docData.start_date;
                    cell5.innerHTML = docData.end_date;
                    var move = document.createElement("button")
                    move.innerHTML ="Check out"
                    move.onclick =  ()=>{
                        this.checkout(project_name)
                    }
                    cell6.appendChild(move)

                    ind+= 1

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