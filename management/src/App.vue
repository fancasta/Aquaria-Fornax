<template>
  <div class="demo-wrap">
  <div class="demo-content">
    <div class="w-100 h-100">
        <router-view />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.demo-wrap {
  position: relative;
}

.demo-wrap:before {
  content: ' ';
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  background-image: url('assets/wallpaper2.jpg');
  background-size: cover;
}

.demo-content {
  position: relative;
}
</style>
