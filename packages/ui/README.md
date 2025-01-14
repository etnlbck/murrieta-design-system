

# Murrieta Design System

Welcome to Murrieta, an atomic design system crafted to reflect the perfect balance of professionalism, creativity, and rugged adventure. Named after the place where it all began, Murrieta is more than a design system—it’s a story of growth, innovation, and collaboration.

## Installation

Install the design system via npm:

`npm install @murrieta/ui`

Or with Yarn:

`yarn add @murrieta/ui`

Or with Bun:

`bun add @murrieta/ui`

## Getting Started

Integrate the design system into your project by importing it.

### Importing Styles

Include the core styles in your project:

`import '@murrieta/ui/styles.css';`

Or include it in your SCSS file if you use preprocessors:

`@import '~@murrieta/ui/styles';`

### Using Components

Start using pre-built components:

```jsx

import { Button, Card } from '@murrieta/ui/atoms';

function App() {
  return (
    <Card>
      <h1>Hello, World!</h1>
      <Button onClick={() => alert('Clicked!')}>Click Me</Button>
    </Card>
  );
}
```

## Features

- 🎨 Customizable: Easily extend or override styles with your theme.
- 🚀 Performant: Optimized for speed and scalability.
- 🌐 Accessible: Built with accessibility-first principles.
- 🛠️ Prebuilt Components: Ready-to-use, responsive UI components.
- 📦 Tree-Shakable: Import only what you need to keep your bundle size small.

## Customization

The design system can be tailored to match your brand using theming capabilities.

### Custom Theme Example

```jsx
import { ThemeProvider } from '@murrieta/ui';
import customTheme from './customTheme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Default Theme Structure

```jsx
const theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ffffff',
    text: '#333333',
  },
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
};
```
## Components

Button

A versatile button for actions.

Props:

- variant: 'primary' | 'secondary' | 'link'
- size: 'small' | 'medium' | 'large'
- onClick: () => void

Example:

```jsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>
```

Documentation

Full documentation for the design system is available [here](https://murrieta.natelubeck.com/?path=/docs/start-here--docs).

Contributing

We welcome contributions! Follow these steps:

1. Clone the repository:

    `git clone https://github.com/etnlbck/murrieta-design-system.git`

2. Install dependencies:

    `npm install`

3. Run the storybook for local development:

    `npm run storybook`
4. Make your changes and submit a pull request.

## Roadmap

- Add support for dark mode.
- Implement more accessibility features.
- Expand component library with forms, modals, and tables.

## License

This design system is licensed under the MIT License.

## Links

- NPM Package: [View on npm](https://www.npmjs.com/package/@murrieta/ui)
- GitHub Repository: [View on GitHub](https://github.com/etnlbck/murrieta-design-system)
- Documentation: [View Documentation](https://murrieta.natelubeck.com/?path=/docs/start-here--docs)

## Author

Created by Nate Lubeck Feel free to reach out with feedback or ideas!
