<template>
    <div class="container shadow mt-3 p-5 col-10">
    <div class="d-flex justify-content-center m-2">
        <h1>Progress Bar</h1>
    </div>
    <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" :style="getWidthLength" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="4"></div>
    </div>
    <div class="d-flex justify-content-center m-2">
        <h1><b>Current Progress: {{progress}} / 4</b></h1>
    </div>
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
            progress:0,
            widthLength: 0,
        }
    },

    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            this.email = user.email
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
            let member_list = projectData.member_list
            for (var member in member_list) {
                this.progress += member_list[member].task_status
            }
            if (this.progress == 4) {
                this.widthLength = 100
            } else if (this.progress == 1) {
                this.widthLength = 25
            } else if (this.progress == 2) {
                this.widthLength = 50
            } else if (this.progress == 3) {
                this.widthLength = 75
            } else {
                this.widthLength = 0
            }
        }, 
    },

    computed: {
        getWidthLength() {
            console.log(this.widthLength)
            return {
                "width": this.widthLength + "%"
            }
        }
    }
}
</script>

<style>

</style>