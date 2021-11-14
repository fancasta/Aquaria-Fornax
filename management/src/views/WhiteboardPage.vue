<template>
  <Navbar />

  <div id="app">
    <div class="flex justify-center">
      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div
          v-for="column in columns"
          :key="column.title"
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
        >
          <p
            class="text-gray-700 font-semibold font-sans tracking-wide text-sm"
          >
            {{ column.title }}
          </p>
          <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
          <draggable group="tasks" class="dragArea list-group w-full">
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
            <task-card
              v-for="task in column.tasks"
              :key="task.id"
              :task="task"
              class="list-group-item mt-3 cursor-move"
            ></task-card>
            <!-- </transition-group> -->
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import Navbar from "@/components/BasicComponent/Navbar.vue";
import TaskCard from "@/components/Whiteboard/TaskCard.vue";
export default {
  name: "WhiteboardPage",
  components: {
    Navbar,
    TaskCard,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      columns: [
        {
          title: "Backlog",
          tasks: [
            {
              id: 1,
              title: "Identify client's goal",
              type: "Business Goal",
            },
            {
              id: 2,
              title: "Set up clients meetings",
              type: "Business Goal",
            },
            {
              id: 3,
              title: "Discuss primary research",
              type: "Research Methodology",
            },
            {
              id: 4,
              title: "Discuss secondary research",
              type: "Research Methodology",
            },
            {
              id: 5,
              title: "Conduct market survey",
              type: "Data Collection",
            },
            {
              id: 6,
              title: "Check in with manager and client",
              type: "Viability Check",
            },
            {
              id: 7,
              title: "Client sharing preparation",
              type: "Presentation",
            },
            {
              id: 8,
              title: "Idea go to market",
              type: "Deployment",
            },
          ],
        },
        {
          title: "In Progress",
          tasks: [],
        },
        {
          title: "Review",
          tasks: [],
        },
        {
          title: "Done",
          tasks: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}
</style>
