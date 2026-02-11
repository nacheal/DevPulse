import { Button } from 'ui'
import { formatDate, formatBytes, isEmail, isUrl } from 'utils'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>DevPulse</h1>
      <p>Welcome to your Turborepo + React 19 project!</p>

      {/* UI 组件使用示例 */}
      <section style={{ marginTop: '2rem' }}>
        <h2>UI Components</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
        </div>
      </section>

      {/* Utils 工具函数使用示例 */}
      <section style={{ marginTop: '2rem' }}>
        <h2>Utils Functions</h2>
        <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
          <li>formatDate(new Date()): {formatDate(new Date())}</li>
          <li>formatBytes(1024 * 1024): {formatBytes(1024 * 1024)}</li>
          <li>isEmail('test@example.com'): {String(isEmail('test@example.com'))}</li>
          <li>isEmail('invalid-email'): {String(isEmail('invalid-email'))}</li>
          <li>isUrl('https://example.com'): {String(isUrl('https://example.com'))}</li>
        </ul>
      </section>
    </div>
  )
}

export default App
