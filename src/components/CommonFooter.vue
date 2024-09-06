<script setup lang="ts">
import { getCurrentSeason, getCurrentYear } from '~/utils/date'
import IconRedHeart from '~icons/fluent-emoji-flat/red-heart'
</script>

<template>
  <footer class="flex flex-col items-center justify-center pt-8 pb-12 leading-8 border-t-[0.8px] dark:border-white/9">
    <div class="flex items-center">
      <span>© 2021 - {{ getCurrentYear() }}</span>
      <!-- add a space -->
      <span class="mx-1">|</span>
      <span>{{ getCurrentSeason() }}</span>
      <!-- get my location -->
      <span class="mx-1">|</span>
      <span>New York City, NY</span>
    </div>
    <p>
      Under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" class="blue-link" target="_blank">CC BY-NC-SA
        4.0</a>
    </p>
  </footer>
</template>
