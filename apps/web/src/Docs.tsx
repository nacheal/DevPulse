import { Button } from 'ui'

interface DocsProps {
  onBack: () => void
}

function Docs({ onBack }: DocsProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-[var(--border)] backdrop-blur-sm bg-[var(--background)]/80 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--gradient-primary)] flex items-center justify-center shadow-[var(--shadow-glow)]">
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
            <h1 className="text-2xl font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              DevPulse
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <button
              onClick={onBack}
              className="text-[var(--text-primary)] transition-colors text-sm font-medium"
            >
              Back to Home
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Documentation</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12">
            Get started with DevPulse - A modern monorepo starter with React 19, TypeScript, and Turborepo.
          </p>

          {/* Quick Links */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="#getting-started"
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-light)] transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  <h4 className="text-lg font-semibold">Getting Started</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-sm">
                  Installation and setup guide
                </p>
              </a>
              <a
                href="#project-structure"
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-light)] transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </span>
                  <h4 className="text-lg font-semibold">Project Structure</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-sm">
                  Understand the monorepo layout
                </p>
              </a>
              <a
                href="#packages"
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-light)] transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </span>
                  <h4 className="text-lg font-semibold">Packages</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-sm">
                  Learn about UI components and utils
                </p>
              </a>
              <a
                href="#commands"
                className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-light)] transition-all hover:shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <h4 className="text-lg font-semibold">Commands</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-sm">
                  Available npm scripts
                </p>
              </a>
            </div>
          </section>

          {/* Getting Started */}
          <section id="getting-started" className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-[var(--primary)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              Getting Started
            </h3>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="text-lg font-semibold mb-4">Prerequisites</h4>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--success)]">✓</span>
                    Node.js &gt;= 18.0.0
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--success)]">✓</span>
                    npm &gt;= 10.9.2
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="text-lg font-semibold mb-4">Installation</h4>
                <div className="bg-[var(--background)] rounded-lg p-4 font-mono text-sm mb-4">
                  <code className="text-[var(--primary-light)]">npm install</code>
                </div>
                <p className="text-[var(--text-secondary)]">
                  Install all dependencies for the monorepo
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="text-lg font-semibold mb-4">Start Development Server</h4>
                <div className="bg-[var(--background)] rounded-lg p-4 font-mono text-sm mb-4">
                  <code className="text-[var(--primary-light)]">npm run dev</code>
                </div>
                <p className="text-[var(--text-secondary)]">
                  Start the development server at http://localhost:5173
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="text-lg font-semibold mb-4">Build for Production</h4>
                <div className="bg-[var(--background)] rounded-lg p-4 font-mono text-sm mb-4">
                  <code className="text-[var(--primary-light)]">npm run build</code>
                </div>
                <p className="text-[var(--text-secondary)]">
                  Build all packages for production deployment
                </p>
              </div>
            </div>
          </section>

          {/* Project Structure */}
          <section id="project-structure" className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-[var(--primary)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </span>
              Project Structure
            </h3>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <pre className="bg-[var(--background)] rounded-lg p-6 text-sm overflow-x-auto">
                <code className="text-[var(--text-secondary)]">
                  {`DevPulse/
├── apps/
│   └── web/                 # Vite + React 19 web app
│       ├── src/
│       ├── package.json
│       └── vite.config.ts
├── packages/
│   ├── ui/                  # UI Components
│   ├── utils/               # Utility Functions
│   └── config/              # Configuration
├── docs/                    # Documentation
├── turbo.json               # Turborepo config
└── package.json`}
                </code>
              </pre>
            </div>
          </section>

          {/* Packages */}
          <section id="packages" className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-[var(--primary)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </span>
              Packages
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="text-lg font-semibold mb-3 text-[var(--primary)]">apps/web</h4>
                <p className="text-[var(--text-secondary)] text-sm mb-3">
                  Main web application using Vite + React 19
                </p>
                <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                  <li>• TypeScript 5.7</li>
                  <li>• Tailwind CSS v4</li>
                  <li>• React 19</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="text-lg font-semibold mb-3 text-[var(--primary)]">packages/ui</h4>
                <p className="text-[var(--text-secondary)] text-sm mb-3">
                  Reusable UI components
                </p>
                <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                  <li>• Button component</li>
                  <li>• TypeScript typed</li>
                  <li>• Tailwind styled</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="text-lg font-semibold mb-3 text-[var(--primary)]">packages/utils</h4>
                <p className="text-[var(--text-secondary)] text-sm mb-3">
                  Common utility functions
                </p>
                <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                  <li>• formatDate()</li>
                  <li>• formatBytes()</li>
                  <li>• isEmail()</li>
                  <li>• isUrl()</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <h4 className="text-lg font-semibold mb-3 text-[var(--primary)]">packages/config</h4>
                <p className="text-[var(--text-secondary)] text-sm mb-3">
                  Configuration settings
                </p>
                <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                  <li>• Site config</li>
                  <li>• API config</li>
                  <li>• Environment vars</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Commands */}
          <section id="commands" className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-[var(--primary)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              Available Commands
            </h3>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-3 pr-4 font-semibold">Command</th>
                    <th className="text-left py-3 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cmd: 'npm install', desc: 'Install all dependencies' },
                    { cmd: 'npm run dev', desc: 'Start development server' },
                    { cmd: 'npm run build', desc: 'Build all packages' },
                    { cmd: 'npm run lint', desc: 'Run code linting' },
                    { cmd: 'npm run test', desc: 'Run tests' },
                    { cmd: 'npm run clean', desc: 'Clean build artifacts' },
                    { cmd: 'npm run format', desc: 'Format code with Prettier' },
                  ].map((item) => (
                    <tr key={item.cmd} className="border-b border-[var(--border)]/50">
                      <td className="py-3 pr-4">
                        <code className="bg-[var(--background)] px-2 py-1 rounded text-[var(--primary-light)] text-xs">
                          {item.cmd}
                        </code>
                      </td>
                      <td className="py-3 text-[var(--text-secondary)]">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-12">
            <div className="p-8 rounded-3xl bg-[var(--gradient-primary)] shadow-[var(--shadow-lg)]">
              <h3 className="text-2xl font-bold mb-4">Ready to build?</h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Start building your next project with DevPulse today.
              </p>
              <Button variant="primary" className="bg-white text-[var(--primary)] hover:bg-white/90">
                <a href="/">Go to Home</a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Docs
