export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.devpulse.example.com',
  version: 'v1',
  timeout: 10000,
  endpoints: {
    auth: '/auth',
    users: '/users',
    projects: '/projects',
  },
} as const

export type ApiConfig = typeof apiConfig
