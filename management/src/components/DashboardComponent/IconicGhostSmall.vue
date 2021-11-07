<template>
  <div
    :class="[`iconic-ghost-small border-1px-mercury`, className || ``]"
    data-id="11:93"
  >
    <img class="icon" data-id="11:97" :src="src" />
  </div>
</template>

<script>
export default {
  name: "IconicGhostSmall",
  props: ["src", "className"],
};
</script>

<style>
.iconic-ghost-small {
  align-items: flex-start;
  border-radius: 4px;
  display: flex;
  height: 32px;
  margin-left: 94px;
  min-width: 32px;
  padding: 14px 10px;
}

.icon {
  height: 4px;
  width: 12px;
}

.iconic-ghost-small.iconic-ghost-small-1 {
  margin-left: 172px;
}
</style>