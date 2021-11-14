<template>
  <div class="demo-wrap">
    <div class="demo-content">
      <div class="w-100 h-100">
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/BasicComponent/Footer.vue'
export default {
  name: "App",
  components: {
    Footer
  }, 
};
</script>

<style>
.demo-wrap {
  position: relative;
}

.demo-wrap:before {
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  background-image: url("assets/wallpaper2.jpg");
  background-size: cover;
}

.demo-content {
  position: relative;
}
</style>
