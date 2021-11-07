<template>
  <div class="calendar-date-selected" data-id="11:436">
    <div
      class="number-8 valign-text-middle montserrat-normal-white-14px"
      data-id="11:438"
    >
      {{ children }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarDateSelected",
  props: ["children"],
};
</script>

<style>
.calendar-date-selected {
  align-items: center;
  background-color: var(--azure-radiance);
  border-radius: 20px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  min-width: 40px;
  padding: 0 8px;
}

.number-8 {
  height: 24px;
  letter-spacing: 0.25px;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  width: 24px;
}
</style>