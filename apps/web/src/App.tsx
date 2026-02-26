import { useState } from 'react'
import { Button } from 'ui'
import { formatDate, formatBytes } from 'utils'
import Docs from './Docs'

function App() {
  const [view, setView] = useState<'home' | 'docs'>('home')

  if (view === 'docs') {
    return <Docs onBack={() => setView('home')} />
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[var(--border)] backdrop-blur-sm bg-[var(--background)]/80 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-purple-400 bg-clip-text text-transparent">
              DevPulse
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <button
              onClick={() => setView('docs')}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium cursor-pointer"
            >
              Documentation
            </button>
            <a
              href="https://github.com/nacheal/DevPulse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium"
            >
              GitHub
            </a>
            <Button variant="primary">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-light)]/10 border border-[var(--primary-light)]/20 text-[var(--primary-light)] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            Now with React 19 & TypeScript 5.7
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build faster with{' '}
            <span className="bg-gradient-to-r from-[var(--primary)] to-purple-400 bg-clip-text text-transparent">
              Turborepo
            </span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            A modern monorepo starter with React 19, TypeScript, Vite, and pre-configured
            UI components and utility functions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="primary" className="px-8 py-3 text-base">
              Start Building
            </Button>
            <Button variant="secondary" className="px-8 py-3 text-base">
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-[var(--surface)]/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">Key Features</h3>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Everything you need to build modern web applications
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Type Safety',
                description: 'Full TypeScript support across all packages with strict mode enabled',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                ),
              },
              {
                title: 'Lightning Fast',
                description: 'Optimized with Turborepo for fast builds and hot module replacement',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Pre-configured',
                description: 'Ready-to-use ESLint, Prettier, and Vite configurations',
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-light)] transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-[var(--primary)]">{feature.icon}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-[var(--text-secondary)] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Demo */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">UI Components</h3>
          <p className="text-[var(--text-secondary)] text-center mb-12">
            Beautiful, accessible components ready to use
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h4 className="text-lg font-semibold mb-4">Buttons</h4>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <h4 className="text-lg font-semibold mb-4">Utility Functions</h4>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
                  <span className="text-[var(--text-muted)]">formatDate()</span>
                  <span className="text-[var(--text-secondary)]">{formatDate(new Date())}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
                  <span className="text-[var(--text-muted)]">formatBytes(1MB)</span>
                  <span className="text-[var(--text-secondary)]">{formatBytes(1024 * 1024)}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
                  <span className="text-[var(--text-muted)]">isEmail()</span>
                  <span className="text-[var(--success)]">valid</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-[var(--text-muted)]">isUrl()</span>
                  <span className="text-[var(--success)]">valid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--primary)] to-purple-600 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Ready to start building?</h3>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Clone the repository and start building your next project with DevPulse today.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button variant="primary" className="bg-white text-[var(--primary)] hover:bg-white/90">
                  Get Started
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setView('docs')}
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 cursor-pointer"
                >
                  Read Docs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-[var(--text-muted)]">
          <p>© 2025 DevPulse. Built with React 19 & Turborepo.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
