<script setup lang="ts">
import type { GitHubRepo } from '@/types/github'
import { Star, Link } from '@element-plus/icons-vue'

// 定義 Props 型別
defineProps<{
    repo: GitHubRepo
}>()
</script>

<template>
    <el-card shadow="hover" class="full-height">
        <template #header>
            <div class="card-header">
                <span class="title">{{ repo.name }}</span>
                <el-link :href="repo.html_url" target="_blank" type="primary" :icon="Link">
                    Link
                </el-link>
            </div>
        </template>
        <p class="desc">{{ repo.description || 'No description provided.' }}</p>
        <div class="meta">
            <el-icon>
                <Star />
            </el-icon> {{ repo.stargazers_count }}
            <el-tag v-if="repo.language" size="small" effect="dark">{{ repo.language }}</el-tag>
        </div>
    </el-card>
</template>

<style scoped>
.full-height {
    height: 100%;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-weight: bold;
    font-size: 1.1rem;
}

.desc {
    color: #666;
    font-size: 0.9rem;
    height: 3em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.meta {
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.8rem;
}
</style>
