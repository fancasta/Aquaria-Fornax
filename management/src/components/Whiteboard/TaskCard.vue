<template>
  <div>
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        {{ task.title }}
      </p>
    </div>
    <div class="flex justify-between items-center">
      <badge v-if="task.type" :color="badgeColor">{{ task.type }}</badge>
    </div>
  </div>
  <!-- <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    
  </div> -->
</template>
<script>
import Badge from "./Badge.vue";
export default {
  components: {
    Badge,
  },
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    badgeColor() {
      // Hardcoded color mapping
      const mappings = {
        "Business Goal": "purple",
        "Research Methodology": "gray",
        "Viability Check": "blue",
        Presentation: "green",
        Deployment: "yellow",
        "Data Collection": "pink",
      };
      return mappings[this.task.type] || mappings.default;
    },
  },
};
</script>
