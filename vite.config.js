import {defineConfig} from 'vite'
import {createVuePlugin} from 'vite-plugin-vue2'
import {fileURLToPath, URL} from 'node:url'

export default defineConfig({
    plugins: [
        createVuePlugin()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        base: '/' // 这里设置服务器的根目录
    }
})
