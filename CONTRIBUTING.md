# Contributing to Murrieta Design System  

We’re thrilled to have you contribute to the **Murrieta Design System**! This guide will help you understand how to contribute, report issues, and collaborate effectively.

## Table of Contents  

1. [Getting Started](#getting-started)
2. [Reporting Issues](#reporting-issues)
3. [Suggesting Features](#suggesting-features)  
4. [Contributing Code](#contributing-code)  
5. [Code Style and Guidelines](#code-style-and-guidelines)  
6. [Testing Your Changes](#testing-your-changes)  
7. [Submitting a Pull Request](#submitting-a-pull-request)  

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

    `bun install`

4. **Start the Development Server**

    Run the Storybook server to preview components:

    `bun run dev`

Reporting Issues

If you encounter a bug or have a suggestion, let us know by creating an issue:
1.Go to the Issues tab.
2.Click New Issue.
3.Provide a clear and descriptive title, along with relevant details, steps to reproduce (if applicable), and screenshots (if helpful).

Suggesting Features

We welcome feature suggestions! To propose a feature:
1.Go to the Issues tab.
2.Create a new issue using the Feature Request template.
3.Describe the feature, its purpose, and how it could be implemented.

Contributing Code

1. Create a Branch

Create a new branch for your work:

`git checkout -b feature/your-feature-name`

2.Make Changes

- Add your code to the appropriate package or app within the repository.
- Follow the Code Style and Guidelines.

Code Style and Guidelines

- Frameworks and Tools: Murrieta uses React, Storybook, Turborepo, and Bun. Ensure compatibility and follow best practices for these tools.
- Component Structure: Follow the atomic design principles used in the project.
- Formatting: Use Prettier for consistent code formatting.
- TypeScript: Write type-safe code whenever possible.

Testing Your Changes

Murrieta includes tests to ensure code quality and functionality. Run tests locally before submitting a pull request:

1.Run All Tests

`bun test`

2.Test Specific Packages

`bun turbo run test --filter=components`

3.Add New Tests

If you add a new feature or component, include corresponding tests.

Submitting a Pull Request
1.Push Your Branch
Push your changes to your forked repository:

`git push origin feature/your-feature-name`

2.Open a Pull Request

- Go to the Murrieta repository.
- Click New Pull Request.
- Select your branch and describe your changes clearly.
  
3.Review Process

- Your pull request will be reviewed by the maintainers.
- Address any feedback or requested changes.

Thank you for contributing to the Murrieta Design System!

Your time and effort help make this project better for everyone. 🚀
