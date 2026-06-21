import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        foreground: '#f1f5f9',
        primary: '#0ea5e9',
        secondary: '#3b82f6',
        accent: '#06b6d4',
        muted: '#1e293b',
        'muted-foreground': '#94a3b8',
      },
    },
  },
  plugins: [],
};

export default config;
