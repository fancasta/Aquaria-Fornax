<template>
    <div class="container shadow mt-3 p-5 col-10">
    <div class="d-flex justify-content-center m-2">
        <h1>Project List</h1>
    </div>
    <div class="d-flex justify-content-center m-2">
        <div v-if="managingProjectList == undefined">
            <h2>Currently you're managing no projects</h2>
        </div>
    </div>
    <div v-if="managingProjectList != undefined" class="d-flex justify-content-center m-2">
        <table id = "table" class="table table-striped">
        <thead>
            <tr>  
            <th>Index</th>
            <th>Project Name</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Progress Update</th>
            <th>Status</th>       
            <th></th>
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
import { collection, doc, getDoc, getDocs, deleteDoc, updateDoc, arrayRemove } from "firebase/firestore"
const db = getFirestore(firebaseApp);

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: "ManagerDashboard", 
    components: {
        
    }, 
    data(){
        return{
            manager_email:"",
            manager_name:"",
            managingProjectList: undefined
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.manager_email = user.email
            this.manager_name = user.displayName
            this.display();
        } else {
            console.log("Sorry")
        }
        });
    },

    methods: {
        async display() {
            let managerDoc = await getDoc(doc(db, "user", this.manager_name))
            let managingProjectList = managerDoc.data().managing_project
            this.managingProjectList = managingProjectList
            console.log(this.managingProjectList)
            let projects = await getDocs(collection(db, "projects"))
            var ind = 1
            if (this.managingProjectList != undefined) {
                projects.forEach((doc) => {
                let docData = doc.data()
                var project_name = docData.project_name
                if (managingProjectList.includes(project_name)) {
                    var table = document.getElementById("table")
                    var row = table.insertRow(ind);
                    var cell1 = row.insertCell(0); 
                    var cell2 = row.insertCell(1); 
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    var cell7 = row.insertCell(6);
                    var cell8 = row.insertCell(7);

                    cell1.innerHTML = ind; 
                    cell2.innerHTML = project_name; 
                    cell3.innerHTML = docData.start_date;
                    cell4.innerHTML = docData.end_date;
                    cell5.innerHTML = docData.update;

                    let member_list = docData.member_list
                    var progress = 0
                    for (var member in member_list) {
                        progress += member_list[member].task_status
                    }
                    if (progress == 4) {
                        cell6.innerHTML = "Finished"
                    } else {
                        cell6.innerHTML = "In progress"
                    }

                    var move = document.createElement("button")
                    move.innerHTML ="Check out"
                    move.onclick =  ()=>{
                        this.checkout(project_name)
                    }
                    cell7.appendChild(move)

                    var deleteButton = document.createElement("button")
                    deleteButton.innerHTML ="Delete"
                    deleteButton.onclick =  ()=>{
                        this.delete(project_name)
                    }
                    cell8.appendChild(deleteButton)

                    ind+= 1
                }
                })
            }            
        },

        checkout(project_name){      
            this.$router.push({ name: 'ProjectDisplay', query: { project_name: project_name } }) 
        },

        async delete(project_name) {
            alert("Delete successfully!")
            await deleteDoc(doc(db, "projects", project_name))
            let tb = document.getElementById("table")
            //delete everything, make data empty and call the display again
            while (tb.rows.length >1){
                tb.deleteRow(1)
            }

            const managerDocRef = doc(db, "user", this.manager_name)
            await updateDoc(managerDocRef, {
                managing_project: arrayRemove("project_name")
            });
            this.display()
        }
    }
}
</script>

<style>

</style>