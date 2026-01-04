<script setup lang="ts">
const { summary } = useSummary()

const searchPattern = ref('')
const showResults = ref(false)
const activeIndex = ref(-1)

const searchResults = computed(() => {
  const pattern = searchPattern.value?.toLowerCase().trim()
  if (!pattern) return []
  return summary
    .filter(post => post.title.toLowerCase().includes(pattern))
    .slice(0, 10) // Limit to 10 results
})

const router = useRouter()

function handleSelect(url: string) {
  router.push(`/posts/${url}`)
  searchPattern.value = ''
  showResults.value = false
  activeIndex.value = -1
}

function handleKeydown(e: KeyboardEvent) {
  if (!searchResults.value.length) return

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = Math.min(activeIndex.value + 1, searchResults.value.length - 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value = Math.max(activeIndex.value - 1, -1)
  } else if (e.key === 'Enter' && activeIndex.value >= 0) {
    e.preventDefault()
    handleSelect(searchResults.value[activeIndex.value].url)
  } else if (e.key === 'Escape') {
    showResults.value = false
    activeIndex.value = -1
  }
}

function handleInput() {
  showResults.value = searchPattern.value.length > 0
  activeIndex.value = -1
}

function handleBlur() {
  // Delay to allow click events to fire
  setTimeout(() => {
    showResults.value = false
    activeIndex.value = -1
  }, 200)
}
</script>

<template>
  <div class="post-search">
    <input
      v-model="searchPattern"
      type="text"
      placeholder="搜索标题..."
      class="search-input"
      @input="handleInput"
      @focus="handleInput"
      @blur="handleBlur"
      @keydown="handleKeydown"
    >
    <div v-if="showResults && searchResults.length" class="search-results">
      <div
        v-for="(post, index) in searchResults"
        :key="post.url"
        :class="['search-result-item', { active: index === activeIndex }]"
        @click="handleSelect(post.url)"
      >
        {{ post.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-search {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s;
  background: var(--bg-color, #fff);
  color: var(--text-color, #333);
}

.search-input:focus {
  outline: none;
  border-color: var(--primary-color, #18a058);
}

.search-results {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--bg-color, #fff);
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
}

.search-result-item {
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-result-item:hover,
.search-result-item.active {
  background-color: var(--hover-color, #f5f5f5);
}

/* Dark mode support */
html.dark .search-input {
  --bg-color: #18181c;
  --text-color: #ffffffd1;
  --border-color: #ffffff3d;
}

html.dark .search-results {
  --bg-color: #18181c;
  --border-color: #ffffff3d;
}

html.dark .search-result-item:hover,
html.dark .search-result-item.active {
  --hover-color: #ffffff14;
}
</style>
