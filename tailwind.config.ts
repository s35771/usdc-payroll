import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#26A69A',
        secondary: '#1E88E5',
        danger: '#E53935',
        warning: '#FFA726',
        success: '#43A047',
      },
    },
  },
  plugins: [],
}
export default config
