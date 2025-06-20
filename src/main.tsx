import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'
import '@/common/styles/frame.scss'
import { ConfigProvider } from 'antd'
import '@ant-design/v5-patch-for-react-19'
import zhCN from 'antd/locale/zh_CN'

const container = document.getElementById('root')
if (!container) throw new Error('root 容器未找到')

const root = createRoot(container)

root.render(
  <StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </StrictMode>
)
