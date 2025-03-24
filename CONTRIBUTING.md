# Contributing Guidelines

Thank you for your interest in contributing to our project! This document outlines the standards and processes we follow to maintain high-quality code and a positive community environment.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Commit Standards](#commit-standards)
- [Code Style](#code-style)
- [Pull Request Process](#pull-request-process)
- [Development Workflow](#development-workflow)
- [Communication](#communication)
- [Legal Disclaimer](#legal-disclaimer)

## Code of Conduct

All contributors are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How to Contribute

1. **Fork the Repository**: Create your own fork of the project.
2. **Create a Branch**: Create a branch for your contribution.
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make Changes**: Implement your changes following our code style guidelines.
4. **Test**: Ensure all tests pass and add new tests for new functionality.
5. **Submit a Pull Request**: Open a PR with a clear description of the changes.

## Commit Standards

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for creating an explicit commit history. Each commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**/**enh**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

### Examples

```
feat(auth): add user authentication system
enh: add user authentication system
fix(dashboard): resolve data loading issue
docs: update installation instructions
```

## Code Style

We maintain consistent code style to improve readability and maintainability. Please follow these guidelines:

### General

- Use meaningful variable and function names
- Keep functions small and focused on a single responsibility
- Comment your code when necessary, especially for complex logic
- Remove debug code before committing

### Automated Formatting

We use the following tools to enforce code style:

- ESLint/Prettier for JavaScript/TypeScript
- Black for Python
- Stylelint for CSS/SCSS

Please ensure these tools are configured in your development environment.

## Pull Request Process

1. **Create a Descriptive PR**: Include a clear title and description of the changes.
2. **Link Related Issues**: Reference any related issues using the GitHub issue linking syntax.
3. **CI Checks**: Ensure all automated tests and checks pass.
4. **Code Review**: Address any feedback from reviewers.
5. **Approval**: PRs require approval from at least one maintainer before merging.
6. **Merge**: A maintainer will merge your PR once it's approved.

## Development Workflow

1. **Issues First**: Start by creating or claiming an issue before working on a change.
2. **Branch Naming**: Use the following format: `type/description` (e.g., `feature/user-auth`, `fix/login-bug`).
3. **Keep PRs Focused**: Each PR should address a single concern.
4. **Regular Updates**: Keep your branches updated with the main branch.

## Communication

- **Discord**: Join our Discord server for real-time communication.
- **Issues**: Use GitHub issues for bug reports and feature requests.
- **Discussions**: Use GitHub Discussions for questions and ideas.

Remember to be respectful and constructive in all communications.

## Legal Disclaimer

By contributing to this project, you agree to our [Contributor Legal Disclaimer](LEGAL.md) which outlines the terms of voluntary contribution.

---

Thank you for helping improve our project! Your contributions make this community better for everyone.
