<template>
  <div
    :class="[`column-item-1`, className || ``]"
    :style="{ 'background-image': 'url(' + row + ')' }"
    data-id="11:212"
  >
    <div
      class="text-1 valign-text-middle encodesans-normal-mine-shaft-14px"
      data-id="11:214"
    >
      {{ text5 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: ["row", "text5", "className"],
};
</script>

<style>
.column-item-1 {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  height: 56px;
  justify-content: flex-end;
  min-width: 121px;
  padding: 0 8.1px;
}

.text-1 {
  height: 40px;
  letter-spacing: 0.25px;
  line-height: 20px;
  width: 105px;
}
</style>