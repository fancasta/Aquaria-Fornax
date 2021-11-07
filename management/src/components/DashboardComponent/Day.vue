<template>
  <div class="bottom-item" data-id="11:145">
    <div class="line-1" data-id="11:147"></div>
    <div
      class="tue valign-text-middle montserrat-normal-star-dust-12px"
      data-id="11:146"
    >
      {{ children }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Day",
  props: ["children"],
};
</script>

<style>
.bottom-item {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  min-height: 224px;
  width: 32px;
}

.line-1 {
  background-color: var(--mercury);
  height: 200px;
  margin-right: 1px;
  width: 1px;
}

.tue,
.wed,
.thu,
.fri,
.sat,
.place-1 {
  height: 16px;
  letter-spacing: 0.4px;
  line-height: 16px;
  margin-top: 8px;
  text-align: center;
  white-space: nowrap;
  width: 32px;
}
</style>