import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        port: 3000,
        open: '/',
    },
    resolve: {
        // 路径别名配置
        alias: {
            '@': path.resolve(import.meta.dirname, 'src'),
        },
    },
    plugins: [react()],
})
