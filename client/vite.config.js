import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

  // https://vite.dev/config/

  plugins: [react()],
  plugins:[tailwindcss(),
  ],

})



