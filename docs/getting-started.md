# Getting Started with Murrieta Design System  

Welcome to the **Murrieta Design System**! This guide will help you set up and start using Murrieta to build cohesive and scalable user interfaces.  

## Prerequisites  

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh/) (a fast JavaScript runtime and package manager)  
- [Node.js](https://nodejs.org/) (optional, for compatibility purposes)  
- A code editor, such as [VS Code](https://code.visualstudio.com/)  

> **Note**: Murrieta uses **[Turborepo](https://turbo.build/)** to manage its monorepo structure, with Bun enabling fast dependency management and script execution.  

## Installation  

Murrieta is published to npm under the organization `@murrieta`. You can install it in your project as follows:  

### Using npm

```bash
npm install @murrieta/ui
```

Using yarn

```bash
yarn add @murrieta/ui
```

Using bun

```bash
bun add @murrieta/ui
```

Using Murrieta Components

After installing, you can use Murrieta components in your React project:

```jsx
import { Button } from '@murrieta/ui';

const App = () => (
  <Button variant="primary">Click Me</Button>
);
export default App;
```

Running Locally

To explore or contribute to the Murrieta Design System, clone the repository and run it locally:
1.Clone the Repository:

```bash
git clone https://github.com/etnlbck/murrieta-design-system.git
cd murrieta-design-system
```

2.Install Dependencies:

Using Bun:

```bash
bun install
```

3.Start the Development Server:

Run the Storybook server to preview and develop components:

```bash
bun run dev
```

4.View in Your Browser:

Open <http://localhost:6006/> to explore and interact with Murrieta components.

That’s it! You’re now ready to use the Murrieta Design System in your projects. For more information, check out the Murrieta GitHub repository.
