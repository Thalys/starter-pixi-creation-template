import type { Plugin } from 'vite'
import path, { resolve } from 'node:path'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import terminal from 'vite-plugin-terminal'
import { assetpackPlugin } from './scripts/assetpack-vite-plugin'

export const remove = (str: string, toRemove: string) => {
  return str.replace(toRemove, '')
}

function refreshOnTsChange (): Plugin {
  return {
    name: 'refresh-on-ts-change',
    handleHotUpdate (ctx) {
      const { file, server } = ctx
      // Customize which files trigger a full reload
      // For example, if you want all TS files to trigger a full reload:
      if (file.endsWith('.ts')) {
        // const relPath = path.relative(__dirname, file)
        // const fWithOutExt = relPath.replace('.ts', '')
        // console.info(`   file changed [ ${fWithOutExt} ]. Reloading...`)
        server.ws.send({ type: 'full-reload' })
        return []
      }
      else {
        console.info(`File ${file} changed`)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // general caches directory where possible for disk space control
  cacheDir: resolve(__dirname, '.cache/vite'),

  build: {

  },

  server: {
    port: 8080,
    open: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './scripts'),
    },
  },

  plugins: [
    devtoolsJson(),
    terminal(),
    refreshOnTsChange(),
    assetpackPlugin()
  ],

  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
})
