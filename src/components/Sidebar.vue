<script setup lang="ts">
const APlayer = defineAsyncComponent(() => import('./APlayer.vue'))
</script>

<template>
  <div>
    <ControlPanel />
    <Suspense>
      <!-- TODO: change the song server -->
      <APlayer song-server="netease" song-id="373425292" />
    </Suspense>
  </div>
</template>
