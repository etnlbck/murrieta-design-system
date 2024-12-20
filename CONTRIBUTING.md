# Contributing to Murrieta Design System  

We’re thrilled to have you contribute to the **Murrieta Design System**! This guide will help you understand how to contribute, report issues, and collaborate effectively.

## Table of Contents  

- [Contributing to Murrieta Design System](#contributing-to-murrieta-design-system)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Reporting Issues](#reporting-issues)
  - [Suggesting Features](#suggesting-features)
  - [Contributing Code](#contributing-code)
  - [Design Collaboration](#design-collaboration)
    - [How to Access Figma Files](#how-to-access-figma-files)
    - [Proposing Design Changes](#proposing-design-changes)
    - [Keep Designs and Code Aligned](#keep-designs-and-code-aligned)
  - [Code Style and Guidelines](#code-style-and-guidelines)
  - [Testing Your Changes](#testing-your-changes)
  - [Submitting a Pull Request](#submitting-a-pull-request)

---

## Getting Started  

1. **Fork the Repository**  

   Start by forking the repository to your GitHub account:  
   - Navigate to the [Murrieta GitHub repository](https://github.com/etnlbck/murrieta-design-system).  
   - Click the **Fork** button in the top-right corner.  

2. **Clone Your Fork**  
   Clone the repository to your local machine:  

    ```bash
   git clone https://github.com/your-username/murrieta-design-system.git
   cd murrieta-design-system```

3. **Install Dependencies**

    Use Bun to install all required dependencies:

    ```bash
    bun install
    ```

4. **Start the Development Server**

    Run the Storybook server to preview components:

    ```bash
    bun run dev
    ```

## Reporting Issues

If you encounter a bug or have a suggestion, let us know by creating an issue:

1. Go to the Issues tab.
2. Click New Issue.
3. Provide a clear and descriptive title, along with relevant details, steps to reproduce (if applicable), and screenshots (if helpful).

## Suggesting Features

We welcome feature suggestions! To propose a feature:

1. Go to the Issues tab.
2. Create a new issue using the Feature Request template.
3. Describe the feature, its purpose, and how it could be implemented.

## Contributing Code

1. Create a Branch

    Create a new branch for your work:

    ```bash
    git checkout -b feature/your-feature-name
    ```

2. Make Changes

- Add your code to the appropriate package or app within the repository.
- Follow the Code Style and Guidelines.

## Design Collaboration  

We use [Figma](https://figma.com/) to design and prototype components for the Murrieta Design System. Contributors are encouraged to review the Figma designs before proposing changes to components.  

### How to Access Figma Files

- View the **[Figma Design System](https://www.figma.com/file/your-file-id)**.  
- Request edit access by [contacting us](mailto:your-email@example.com) if you plan to contribute new designs.  

### Proposing Design Changes  

1. Duplicate the main design file into your personal drafts in Figma.  
2. Make your proposed changes.  
3. Share a link to your updated file in a GitHub issue or pull request.  

### Keep Designs and Code Aligned  

- Always test your design changes in Figma against the live components in the codebase.  
- Notify maintainers if updates in Figma need to be reflected in the code.  

## Code Style and Guidelines

- Frameworks and Tools: Murrieta uses React, Storybook, Turborepo, and Bun. Ensure compatibility and follow best practices for these tools.
- Component Structure: Follow the atomic design principles used in the project.
- Formatting: Use Prettier for consistent code formatting.
- TypeScript: Write type-safe code whenever possible.

## Testing Your Changes

Murrieta includes tests to ensure code quality and functionality. Run tests locally before submitting a pull request:

1.Run All Tests

`bun test`

2.Test Specific Packages

```bash
bun turbo run test --filter=components
```

3.Add New Tests

If you add a new feature or component, include corresponding tests.

## Submitting a Pull Request

1. Push Your Branch

   Push your changes to your forked repository:

   ```bash 
   git push origin feature/your-feature-name
   ```

1. Open a Pull Request

- Go to the Murrieta repository.
- Click New Pull Request.
- Select your branch and describe your changes clearly.

3.Review Process

- Your pull request will be reviewed by the maintainers.
- Address any feedback or requested changes.

Thank you for contributing to the Murrieta Design System!

Your time and effort help make this project better for everyone. 🚀
