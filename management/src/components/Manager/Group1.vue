<template>
  <div class="container-center-horizontal">
    <div class="group-1screen">
      <dashboard-sample v-bind="topMenuProps" />
    </div>
  </div>
</template>

<script>
import DashboardSample from "@/components/Manager/DashboardSample.vue";

export default {
  name: "Group1",
  components: {
    DashboardSample,
  },
  props: ["topMenuProps"],
};
</script>

<style module>
.group-1 {
  align-items: flex-start;
  display: flex;
  height: 1120px;
  position: relative;
  width: 1440px;
}

.container-center-horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  pointer-events: none;
  width: 100%;
}

.container-center-horizontal > * {
  flex-shrink: 0;
  pointer-events: auto;
}

.container-center-horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  pointer-events: none;
  width: 100%;
}

.container-center-horizontal > * {
  flex-shrink: 0;
  pointer-events: auto;
}
</style>