<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { fetchRepos } from '@/api/github';
import type { GitHubRepo } from '@/types/github';
import RepoCard from '@/components/RepoCard.vue'

// states
const repos = ref<GitHubRepo[]>([]);
const page = ref(1);
const loading = ref(false);
const hasMore = ref(true);
const sentinel = ref<HTMLElement | null>(null);

// load more
const loadMore = async () => {
  if (loading.value || !hasMore.value) return;

  loading.value = true;
  try {
    const newData = await fetchRepos(page.value, 10); // 稍微加大量，一頁 15 筆
    console.log(`[API] 成功拿回 ${newData.length} 筆資料`);

    if (newData.length < 10) hasMore.value = false;

    repos.value = [...repos.value, ...newData];
    page.value++;

  } catch (error) {
    console.error('加載失敗:', error);
  } finally {
    loading.value = false;
  }
};

// Intersection Observer
let observer: IntersectionObserver | null = null;

onMounted(async () => {
  console.log('App Mounted!');

  // 先執行第一次載入
  await loadMore();

  // 確定有資料且 DOM 渲染後再開始觀察
  observer = new IntersectionObserver(([entry]) => {

    if (entry.isIntersecting && !loading.value && hasMore.value) {
      loadMore();
    }
  }, {
    rootMargin: '200px',
    threshold: 0.01
  });

  if (sentinel.value) {
    observer.observe(sentinel.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col v-for="repo in repos" :key="repo.id" :xs="24" :sm="12" :md="8" class="card-col">
        <RepoCard :repo="repo" />
      </el-col>
    </el-row>

    <div ref="sentinel" class="scroll-footer">
      <el-skeleton v-if="loading" :rows="3" animated />
      <p v-if="!hasMore" class="end-msg">已經到底囉！</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  min-height: 100vh;
}

.card-col {
  margin-bottom: 20px;
}

.scroll-footer {
  margin-top: auto;
  padding: 40px 0;
  min-height: 100px;
  text-align: center;
}
</style>
