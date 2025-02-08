import type { Config } from "tailwindcss";

// Since we're using CSS variables from variables.css, we'll map the color tokens using CSS variables
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        // Light mode colors with fallbacks
        'nl-primary': 'var(--colors-light-nl-primary, #4a5455)',
        'nl-secondary': 'var(--colors-light-nl-secondary, #798a8b)',
        'nl-tertiary': 'var(--colors-light-nl-tertiary, #bcc5c5)',
        'ag-yellow': 'var(--colors-light-ag-yellow, #f1c84b)',
        'ag-magenta': 'var(--colors-light-ag-magenta, #bc4377)',
        'ag-red': 'var(--colors-light-ag-red, #e22029)',
        'ag-blue': 'var(--colors-light-ag-blue, #3a75ba)',
        'ag-green': 'var(--colors-light-ag-green, #7cc258)',
        'background': {
          primary: 'var(--colors-light-background-primary, #bcc5c5)',
          secondary: 'var(--colors-light-background-secondary, #798a8b)'
        },
        'text': {
          primary: 'var(--colors-light-text-primary, #4a5455)',
          secondary: 'var(--colors-light-text-secondary, #798a8b)'
        },
        'cta': {
          'link-text': 'var(--colors-light-cta-link-text, #3a75ba)'
        },
        'highlight': 'var(--colors-light-hightlight, #f1c84b)',
        'warning': 'var(--colors-light-warning-error, #e22029)',
        'success': 'var(--colors-light-success, #7cc258)',

        // Dark mode colors with fallbacks
        'dark': {
          'nl-primary': 'var(--colors-dark-nl-primary, #798a8b)',
          'nl-secondary': 'var(--colors-dark-nl-secondary, #bcc5c5)',
          'nl-tertiary': 'var(--colors-dark-nl-tertiary, #dee2e2)',
          'ag-yellow': 'var(--colors-dark-ag-yellow, #fad84c)',
          'ag-magenta': 'var(--colors-dark-ag-magenta, #f1a7b4)',
          'ag-red': 'var(--colors-dark-ag-red, #e7807e)',
          'ag-blue': 'var(--colors-dark-ag-blue, #4ca8d6)',
          'ag-green': 'var(--colors-dark-ag-green, #b4d99b)',
          'background': {
            primary: 'var(--colors-dark-background-primary, #798a8b)',
            secondary: 'var(--colors-dark-background-secondary, #dee2e2)'
          },
          'text': {
            primary: 'var(--colors-dark-text-primary, #dee2e2)',
            secondary: 'var(--colors-dark-text-secondary, #bcc5c5)'
          },
          'cta': {
            'link-text': 'var(--colors-dark-cta-link-text, #4ca8d6)'
          },
          'highlight': 'var(--colors-dark-hightlight, #fad84c)',
          'warning': 'var(--colors-dark-warning-error, #e7807e)',
          'success': 'var(--colors-dark-success, #b4d99b)'
        }
      }
    }
  },
  plugins: [],
}

export default config;