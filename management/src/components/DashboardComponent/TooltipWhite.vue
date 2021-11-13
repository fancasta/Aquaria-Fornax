<template>
  <div :class="[`tooltip-white`, className || ``]" data-id="11:90">
    <div class="overlap-group-16" data-id="an|M4daGHmC">
      <div
        class="
          price-2
          dashboard-valign-text-middle
          montserrat-normal-mine-shaft-12px
        "
        data-id="I11:90;0:1222"
      >
        {{ price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TooltipWhite",
  props: ["price", "className"],
};
</script>

<style>
.tooltip-white {
  align-items: flex-start;
  display: flex;
  height: 40px;
  justify-content: center;
  left: 77px;
  min-width: 56px;
  position: absolute;
  top: 34px;
}

.overlap-group-16 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/rectangle-36@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 88px;
  margin-top: -20px;
  min-width: 104px;
  padding: 28px 32px;
}

.price-2 {
  height: 16px;
  letter-spacing: 0.4px;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  width: 40px;
}

.tooltip-white.tooltip-white-1 {
  left: 80px;
  top: 18px;
}

.tooltip-white.tooltip-white-1 .overlap-group-16 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/6182c1b0aece272ee7259e11/img/rectangle-36-1@2x.svg);
}
</style>