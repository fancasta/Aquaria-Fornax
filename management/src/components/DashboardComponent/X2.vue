<template>
  <div class="digits-item-1 montserrat-normal-mine-shaft-14px" data-id="11:412">
    <div class="number-6 valign-text-middle" data-id="11:414">{{ number }}</div>
    <div class="number-7 valign-text-middle" data-id="11:416">
      {{ number2 }}
    </div>
    <div class="number-7 valign-text-middle" data-id="11:418">
      {{ number3 }}
    </div>
    <div class="number-7 valign-text-middle" data-id="11:420">
      {{ number4 }}
    </div>
    <div class="number-7 valign-text-middle" data-id="11:422">
      {{ number5 }}
    </div>
    <div class="number-7 valign-text-middle" data-id="11:424">
      {{ number6 }}
    </div>
    <div class="number-7 valign-text-middle" data-id="11:426">
      {{ number7 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "X2",
  props: [
    "number",
    "number2",
    "number3",
    "number4",
    "number5",
    "number6",
    "number7",
  ],
};
</script>

<style>
.digits-item-1 {
  align-items: flex-start;
  display: flex;
  min-width: 352px;
}

.number-6 {
  height: 40px;
  letter-spacing: 0.25px;
  line-height: 20px;
  text-align: center;
  width: 40px;
}

.number-7 {
  height: 40px;
  letter-spacing: 0.25px;
  line-height: 20px;
  margin-left: 12px;
  text-align: center;
  width: 40px;
}
</style>
