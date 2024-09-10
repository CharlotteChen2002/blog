<script setup lang="ts">
// const APlayer = defineAsyncComponent(() => import('./APlayer.vue'))
import Yiyan from './Hitokoto.vue'
</script>

<template>
  <div>
    <ControlPanel />
    <Suspense>
      <Yiyan />
    </Suspense>
  </div>
</template>