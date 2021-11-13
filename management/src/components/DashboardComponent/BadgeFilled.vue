<template>
  <div :class="[`badge-filled-3`, className || ``]" data-id="11:235">
    <div
      class="pending dashboard-valign-text-middle montserrat-normal-white-12px"
      data-id="I11:235;0:889"
    >
      {{ children }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BadgeFilled",
  props: ["children", "className"],
};
</script>

<style>
.badge-filled-3 {
  align-items: center;
  background-color: var(--crusta);
  border-radius: 4px;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  min-width: 95px;
  padding: 0 7.9px;
}

.pending {
  height: 16px;
  letter-spacing: 0.4px;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  width: 80px;
}

.badge-filled-3.badge-filled-1 {
  background-color: var(--christi);
}

.badge-filled-3.badge-filled-2 {
  align-items: center;
  background-color: var(--sunset-orange);
  border-radius: 4px;
  display: flex;
  height: 24px;
  justify-content: flex-end;
  min-width: 95px;
  padding: 0 7.9px;
}
</style>