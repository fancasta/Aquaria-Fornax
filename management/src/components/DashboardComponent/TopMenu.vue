<template>
  <div class="top-menu" data-id="11:26">
    <div class="top-bar" data-id="11:27">
      <div class="left-1" data-id="11:29">
        <h1
          class="
            title
            dashboard-valign-text-middle
            montserrat-bold-azure-radiance-24px
          "
          data-id="20:171"
        >
          XYZ Marketing
        </h1>
        <div class="overlap-group1-9" data-id="an|3QA3tDj6">
          <div class="ellipse-18" data-id="20:173"></div>
          <div class="rectangle" data-id="11:33"></div>
          <div class="overlap-group-11" data-id="an|ut9jtjVq">
            <img class="size-3" data-id="11:37" :src="size" />
          </div>
          <div class="label-caption" data-id="11:41">
            <div
              class="
                yow-yu-xuan-1
                dashboard-valign-text-middle
                montserrat-normal-mine-shaft-16px
              "
              data-id="11:43"
            >
              Yow Yu Xuan
            </div>
            <div
              class="singapore-apac montserrat-normal-star-dust-12px"
              data-id="11:42"
            >
              Singapore, APAC
            </div>
          </div>
          <div
            class="yx dashboard-valign-text-middle montserrat-bold-black-16px"
            data-id="20:172"
          >
            YX
          </div>
          <div class="ellipse-19" data-id="20:174"></div>
        </div>
      </div>
      <div class="right" data-id="11:44">
        <div class="misc-search border-1px-alto" data-id="11:62">
          <div
            class="
              search-text
              dashboard-valign-text-middle
              montserrat-normal-star-dust-14px
            "
            data-id="11:65"
          >
            Search text
          </div>
          <div class="overlap-group-12" data-id="an|NWq94fv5">
            <img
              class="oval"
              data-id="11:67"
              src="https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/oval-1@2x.svg"
            />
            <img
              class="shape-9"
              data-id="11:68"
              src="https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/shape-3@2x.svg"
            />
            <img class="size-4" data-id="11:69" :src="size2" />
          </div>
        </div>
        <div class="overlap-group1-10" data-id="an|MhtNq5AQ">
          <div class="iconic-filled-medium" data-id="11:46">
            <div class="overlap-group-13" data-id="an|JHy2Jecb">
              <img class="size-3" data-id="11:53" :src="size3" />
            </div>
          </div>
          <div class="indicator" data-id="11:54"></div>
        </div>
        <iconic-filled-medium
          :size="iconicFilledMediumProps.size"
          data-id="11:55:an-component-instance"
        />
      </div>
    </div>
    <div class="sub-menu" data-id="11:70">
      <div class="links montserrat-normal-black-14px" data-id="11:73">
        <div class="dashboard dashboard-valign-text-middle" data-id="11:74">
          Dashboard
        </div>
        <div class="inbox dashboard-valign-text-middle" data-id="11:75">
          Inbox
        </div>
        <div class="security dashboard-valign-text-middle" data-id="11:76">
          Security
        </div>
        <div class="calendar dashboard-valign-text-middle" data-id="11:77">
          Calendar
        </div>
        <div class="more-horizontal" data-id="11:78">
          <img
            class="oval-1"
            data-id="11:81"
            src="https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/oval-2@2x.svg"
          />
          <div class="overlap-group-14" data-id="an|Op2BIlSg">
            <img class="size-3" data-id="11:82" :src="size4" />
          </div>
          <img
            class="oval-2"
            data-id="11:80"
            src="https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/oval-2@2x.svg"
          />
        </div>
      </div>
      <div
        class="
          address
          dashboard-valign-text-middle
          montserrat-semi-bold-mine-shaft-12px
        "
        data-id="11:72"
      >
        28 October 2021
      </div>
    </div>
  </div>
</template>

<script>
import IconicFilledMedium from "@/components/DashboardComponent/IconicFilledMedium.vue";

export default {
  name: "TopMenu",
  components: {
    IconicFilledMedium,
  },
  props: ["size", "size2", "size3", "size4", "iconicFilledMediumProps"],
};
</script>

<style>
.top-menu {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 144px;
  width: 1440px;
}

.top-bar {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 88px;
  min-width: 1440px;
  padding: 0 16px;
}

.left-1 {
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  min-width: 424px;
}

.title {
  height: 63px;
  letter-spacing: 0.4px;
  line-height: 22px;
  margin-top: -3px;
  mix-blend-mode: multiply;
  text-align: center;
  width: 160px;
}

.overlap-group1-9 {
  height: 56px;
  position: relative;
  width: 256px;
}

.ellipse-18 {
  background-color: var(--mist-gray);
  border-radius: 20px;
  height: 40px;
  left: 21px;
  position: absolute;
  top: 8px;
  width: 40px;
}

.rectangle {
  background-color: var(--white);
  height: 56px;
  left: 0;
  position: absolute;
  top: 0;
  width: 256px;
}

.overlap-group-11 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/shape@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 6px;
  left: 227px;
  min-width: 10px;
  padding: 0 4.8px;
  position: absolute;
  top: 25px;
}

.size-3 {
  height: 1px;
  width: 1px;
}

.label-caption {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 72px;
  min-height: 40px;
  position: absolute;
  top: 8px;
  width: 146px;
}

.yow-yu-xuan-1 {
  height: 24px;
  letter-spacing: 0.44px;
  line-height: 24px;
  white-space: nowrap;
}

.singapore-apac {
  letter-spacing: 0.4px;
  line-height: 16px;
  min-height: 16px;
  white-space: nowrap;
}

.yx {
  height: 28px;
  left: 16px;
  letter-spacing: 0;
  line-height: 0.1px;
  position: absolute;
  text-align: center;
  top: 16px;
  width: 48px;
}

.ellipse-19 {
  background-color: var(--mist-gray);
  border-radius: 20px;
  height: 40px;
  left: 20px;
  opacity: 0.5;
  position: absolute;
  top: 10px;
  width: 40px;
}

.right {
  align-items: center;
  display: flex;
  margin-left: 568px;
  min-width: 416px;
  position: relative;
}

.misc-search {
  align-items: center;
  background-color: var(--white);
  border-radius: 4px;
  display: flex;
  height: 56px;
  min-width: 296px;
  padding: 0 16px;
}

.search-text {
  height: 24px;
  letter-spacing: 0.25px;
  line-height: 20px;
  white-space: nowrap;
  width: 224px;
}

.overlap-group-12 {
  height: 20px;
  margin-left: 18px;
  margin-top: 0.4px;
  position: relative;
  width: 20px;
}

.oval {
  height: 17px;
  left: 0;
  position: absolute;
  top: 0;
  width: 17px;
}

.shape-9 {
  height: 8px;
  left: 12px;
  position: absolute;
  top: 12px;
  width: 8px;
}

.size-4 {
  height: 1px;
  left: 10px;
  position: absolute;
  top: 10px;
  width: 1px;
}

.overlap-group1-10 {
  border-radius: 4px;
  height: 40px;
  margin-left: 24px;
  position: relative;
  width: 40px;
}

.iconic-filled-medium {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 4px;
  display: flex;
  height: 40px;
  left: 0;
  min-width: 40px;
  padding: 9px 9.5px;
  position: absolute;
  top: 0;
}

.overlap-group-13 {
  align-items: flex-end;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/shape-1@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 22px;
  min-width: 21px;
  padding: 10.7px 10.2px;
}

.indicator {
  background-color: var(--azure-radiance);
  border-radius: 4px;
  height: 8px;
  left: 32px;
  position: absolute;
  top: 0;
  width: 8px;
}

.sub-menu {
  align-items: center;
  background-color: var(--cultured-pearl);
  display: flex;
  height: 56px;
  min-width: 1440px;
  padding: 0 16px;
}

.links {
  align-items: center;
  display: flex;
  min-width: 424px;
}

.dashboard {
  height: 20px;
  letter-spacing: 0.25px;
  line-height: 20px;
  min-width: 79px;
  white-space: nowrap;
}

.inbox {
  height: 20px;
  letter-spacing: 0.25px;
  line-height: 20px;
  margin-left: 40px;
  min-width: 41px;
  white-space: nowrap;
}

.security {
  height: 20px;
  letter-spacing: 0.25px;
  line-height: 20px;
  margin-left: 40px;
  min-width: 59px;
  white-space: nowrap;
}

.calendar {
  height: 20px;
  letter-spacing: 0.25px;
  line-height: 20px;
  margin-left: 40px;
  min-width: 65px;
  white-space: nowrap;
}

.more-horizontal {
  align-items: center;
  display: flex;
  height: 24px;
  margin-left: 36px;
  min-width: 24px;
  padding: 0 2px;
}

.oval-1 {
  height: 4px;
  width: 4px;
}

.overlap-group-14 {
  align-items: center;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/61825fa300fc739048a5ec95/releases/61825fb1e1fbdf8794997c78/img/oval-2@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 4px;
  margin-left: 4px;
  min-width: 4px;
  padding: 0 1.8px;
}

.oval-2 {
  height: 4px;
  margin-left: 4px;
  width: 4px;
}

.address {
  height: 16px;
  letter-spacing: 0.4px;
  line-height: 16px;
  margin-left: 879px;
  min-width: 105px;
  text-align: right;
  white-space: nowrap;
}
</style>

