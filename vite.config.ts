import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";
import obsidian from 'swc-plugin-obsidian'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
      plugins: [ obsidian() ],
      useAtYourOwnRisk_mutateSwcOptions: (options) => {
        options!.jsc!.parser!.decorators = true;
        options!.jsc!.experimental!.runPluginFirst = true
      }
    })
  ],
})
