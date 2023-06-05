
<template>
  <Welcome v-if="welcome"></Welcome>
  <ChatHome v-else></ChatHome>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Welcome from './components/Welcome.vue';
import ChatHome from './views/chatHome.vue';
const welcome = ref(true)
onMounted(() => {
  setTimeout(() => {
    welcome.value = false
  }, 7600)
})

</script>
<style lang="scss">
@import './theme/index.scss';
</style>


