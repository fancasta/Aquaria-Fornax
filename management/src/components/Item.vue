<template>
  <div :class="[`item-2`, className || ``]" data-id="11:101">
    <div class="indicator-1" data-id="11:103"></div>
    <div
      class="seo valign-text-middle montserrat-normal-star-dust-12px"
      data-id="11:102"
    >
      {{ children }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["children", "className"],
};
</script>

<style>
.item-2 {
  align-items: center;
  display: flex;
  min-width: 71px;
}

.indicator-1 {
  background-color: var(--azure-radiance);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.seo {
  height: 16px;
  letter-spacing: 0.4px;
  line-height: 16px;
  margin-left: 16px;
  min-width: 27px;
  white-space: nowrap;
}

.item-2.item-1,
.item-2.item-1-1,
.item-2.item-1-2,
.item-2.item-1-3 {
  margin-left: 16px;
}

.item-2.item-1-1 .indicator-1,
.item-2.item-1-3 .indicator-1 {
  background-color: var(--crusta);
}

.item-2.item-1-1 .seo {
  min-width: 18px;
}

.item-2.item-1-2 .indicator-1,
.item-2.item-1 .indicator-1 {
  background-color: var(--purple-plum);
}

.item-2.item-1-2 .seo {
  min-width: 73px;
}

.item-2.item .seo {
  min-width: 35px;
}

.item-2.item-1-3 .seo {
  min-width: 38px;
}
</style>