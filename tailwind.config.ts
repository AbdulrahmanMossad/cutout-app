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
        primary: '#7c3aed',
        secondary: '#a78bfa',
        accent: '#c4b5fd',
        muted: '#1e293b',
        'muted-foreground': '#94a3b8',
      },
    },
  },
  plugins: [],
};

export default config;
