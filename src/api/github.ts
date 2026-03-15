import type { GitHubRepo } from '@/types/github'

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN
const USERNAME = 'google'
const BASE_URL = `https://api.github.com/users/${USERNAME}/repos`

export const fetchRepos = async (page: number, perPage: number = 10): Promise<GitHubRepo[]> => {
  const response = await fetch(`${BASE_URL}?page=${page}&per_page=${perPage}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  })

  if (response.status === 403) {
    alert('觸發 GitHub API 頻率限制，請稍候再試或加入 Token。')
  }

  if (!response.ok) throw new Error(`API 報錯: ${response.status}`)
  return await response.json()
}
