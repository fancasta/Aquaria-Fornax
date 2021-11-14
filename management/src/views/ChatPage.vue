<template>
  <Navbar/>
  <div class="d-flex justify-content-center p-3">
        <h1>Social space</h1>
    </div>
    <BackButton/>
  <div>
  </div>
  <div class="row">
  <div class="col-2"></div>
  <div class="col-8">
  <div class="container shadow mt-3 p-5 col-6">
    <Chat />
  </div>
  </div>
        <div class="col-2"></div>
  </div>
</template>

<script>
import "@/assets/css/chat.css";
import Chat from "@/components/Chat/Chat.vue";
import Navbar from '@/components/BasicComponent/Navbar.vue'
import BackButton from '@/components/BasicComponent/BackButton.vue'



export default {
  name: "ChatPage",
  components: { 
    Chat,
    Navbar,
    BackButton 
  },
};
</script>

<style scoped>
.avatar {
  @apply h-8;
  @apply w-8;
  @apply rounded-full;
}

.container-sm {
  @apply container;
  @apply max-w-xl;
}

.message {
  @apply my-2;
  @apply w-full;
}

.message span {
  @apply ml-11;
  @apply text-xs;
  @apply text-gray-500;
}

.message .text {
  @apply mx-2;
  @apply p-2;
  @apply rounded-lg;
  @apply text-white;
}

.bottom {
  @apply bottom-0;
  @apply bg-gray-900;
  @apply shadow-lg;
  @apply w-full;
}

.bottom form {
  @apply w-full;
  @apply flex;
  @apply justify-between;
}

.bottom form input {
  @apply flex-grow;
  @apply m-2;
  @apply py-2;
  @apply px-4;
  @apply mr-1;
  @apply rounded;
  @apply border-none;
  @apply bg-gray-700;
  @apply text-white;
}

.icon-send {
  @apply text-gray-500;
  @apply w-12;
  @apply h-12;
  @apply py-2;
  @apply mr-2;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-600;
  @apply shadow-lg;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300;
  @apply rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-200;
}
</style>