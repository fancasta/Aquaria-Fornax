<template>
  <div :class="[`iconic-filled-medium-1`, className || ``]" data-id="11:55">
    <div class="overlap-group-15" data-id="an|XQDX713m">
      <img
        class="oval-3"
        data-id="11:59"
        src="https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/oval@2x.svg"
      />
      <img
        class="shape-10"
        data-id="11:60"
        src="https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/shape-2@2x.svg"
      />
      <img class="size-5" data-id="11:61" :src="size" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IconicFilledMedium",
  props: ["size", "className"],
};
</script>

<style>
.iconic-filled-medium-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 4px;
  display: flex;
  height: 40px;
  margin-left: 16px;
  min-width: 40px;
  padding: 0 8px;
}

.overlap-group-15 {
  height: 24px;
  position: relative;
  width: 24px;
}

.oval-3 {
  height: 8px;
  left: 8px;
  position: absolute;
  top: 8px;
  width: 8px;
}

.shape-10 {
  height: 24px;
  left: 0;
  position: absolute;
  top: 0;
  width: 24px;
}

.size-5 {
  height: 1px;
  left: 12px;
  position: absolute;
  top: 12px;
  width: 1px;
}

.iconic-filled-medium-1.iconic-filled-medium-2 {
  background-color: var(--mercury);
  margin-left: 452px;
}
</style>
