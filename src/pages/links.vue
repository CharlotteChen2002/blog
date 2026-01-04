<script setup lang="ts">
import friends from '~/jsons/friends.json'
</script>

<template>
  <n-divider title-placement="left">
    友情链接
  </n-divider>
  <div class="overflow-hidden flex flex-wrap">
    <a v-for="friend in friends" :key="friend.name" :href="friend.url" target="_blank" class="flex-auto text-left m-2.5 flex card p-4">
      <picture class="mr-3 rounded-full" style="aspect-ratio: 1; width: 48px; height: 48px;">
        <source :srcset="friend.avatar.replace(/\.(jpe?g|png)$/i, '.webp')" type="image/webp">
        <img :src="friend.avatar" :alt="friend.name" class="rounded-full" style="aspect-ratio: 1;" height="48" width="48" loading="lazy">
      </picture>
      <div class="flex flex-col">
        <b>{{ friend.name }}</b>
        {{ friend.introduction }}
      </div>
    </a>
  </div>
</template>
