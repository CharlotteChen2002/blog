<script setup lang="ts">
const props = defineProps<{
  post: string
}>()
const { summary } = useSummary()
const postIndex = computed(() =>
  summary.findIndex(PostSummary => PostSummary.url === props.post),
)
</script>

<template>
  <div class="overflow-hidden my-12 p-4 border-t border-b">
    <div v-if="postIndex > 0" class="float-left my-2">
      <router-link :to="`/posts/${encodeURIComponent(summary[postIndex - 1].url)}`">
        Last：{{ summary[postIndex - 1].title }}
      </router-link>
    </div>
    <div v-if="postIndex + 1 < summary.length" class="float-right my-2">
      <router-link :to="`/posts/${encodeURIComponent(summary[postIndex + 1].url)}`">
        Next：{{ summary[postIndex + 1].title }}
      </router-link>
    </div>
  </div>
</template>
