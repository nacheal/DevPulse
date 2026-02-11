export const siteConfig = {
  name: 'DevPulse',
  description: 'A developer productivity tool',
  url: 'https://devpulse.example.com',
  links: {
    github: 'https://github.com/example/devpulse',
    docs: 'https://devpulse.example.com/docs',
  },
} as const

export type SiteConfig = typeof siteConfig
