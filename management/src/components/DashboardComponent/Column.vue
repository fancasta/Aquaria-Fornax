<template>
  <div :class="[`column-4`, className || ``]" data-id="11:283">
    <div class="overlap-group5-3" data-id="an|2cBWDZ2o">
      <div
        class="
          start-date
          dashboard-valign-text-middle
          montserrat-normal-mine-shaft-14px
        "
        data-id="11:301"
      >
        {{ startDate }}
      </div>
    </div>
    <div class="overlap-group4-3" data-id="an|wH0MoQQs">
      <div
        class="
          text-15
          dashboard-valign-text-middle
          encodesans-normal-mine-shaft-14px
        "
        data-id="11:298"
      >
        {{ text15 }}
      </div>
    </div>
    <div class="overlap-group3-4" data-id="an|Zs6woAHj">
      <div
        class="
          text-14
          dashboard-valign-text-middle
          encodesans-normal-mine-shaft-14px
        "
        data-id="11:295"
      >
        {{ text14 }}
      </div>
    </div>
    <div class="overlap-group2-6" data-id="an|6p0C5Rvm">
      <div
        class="
          text-13
          dashboard-valign-text-middle
          encodesans-normal-mine-shaft-14px
        "
        data-id="11:292"
      >
        {{ text13 }}
      </div>
    </div>
    <div class="overlap-group1-11" data-id="an|jn6Ar3B8">
      <div
        class="
          text-12
          dashboard-valign-text-middle
          encodesans-normal-mine-shaft-14px
        "
        data-id="11:289"
      >
        {{ text12 }}
      </div>
    </div>
    <div class="overlap-group-17" data-id="an|ohzM2Jv9">
      <div
        class="
          text-11
          dashboard-valign-text-middle
          encodesans-normal-mine-shaft-14px
        "
        data-id="11:286"
      >
        {{ text11 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: [
    "startDate",
    "text15",
    "text14",
    "text13",
    "text12",
    "text11",
    "className",
  ],
};
</script>

<style>
.column-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 196px;
  min-height: 336px;
  position: absolute;
  top: 0;
  width: 159px;
}

.overlap-group5-3 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-29@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 56px;
  margin-left: -0.5px;
  min-width: 160px;
  padding: 0 11.1px;
}

.start-date,
.text-15,
.text-14,
.text-13,
.text-12,
.text-11 {
  height: 40px;
  letter-spacing: 0.25px;
  line-height: 20px;
  width: 138px;
}

.overlap-group4-3 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-28@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 56px;
  margin-left: -0.5px;
  min-width: 160px;
  padding: 0 11.1px;
}

.overlap-group3-4 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-27@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 56px;
  margin-left: -0.5px;
  min-width: 160px;
  padding: 0 11.1px;
}

.overlap-group2-6 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-26@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 56px;
  margin-left: -0.5px;
  min-width: 160px;
  padding: 0 11.1px;
}

.overlap-group1-11 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-25@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 56px;
  margin-left: -0.5px;
  min-width: 160px;
  padding: 0 11.1px;
}

.overlap-group-17 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-24@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 56px;
  margin-left: -0.5px;
  min-width: 160px;
  padding: 0 11.1px;
}

.column-4.column-5 {
  left: unset;
  position: unset;
  top: unset;
}

.column-4.column-5 .overlap-group5-3 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-35@2x.svg);
}

.column-4.column-5 .overlap-group4-3 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-34@2x.svg);
}

.column-4.column-5 .overlap-group3-4 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-33@2x.svg);
}

.column-4.column-5 .overlap-group2-6 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-32@2x.svg);
}

.column-4.column-5 .overlap-group1-11 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-31@2x.svg);
}

.column-4.column-5 .overlap-group-17 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/base-30@2x.svg);
}
</style>
