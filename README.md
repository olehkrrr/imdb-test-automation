# IMDb Test Automation

This project contains automated tests for IMDb using Playwright.

## Features

- Automated UI tests for IMDb
- ESLint and Prettier for code quality
- Husky for pre-commit hooks
- Dotenv for environment variable management

## Prerequisites

- Node.js (recommended: latest LTS)
- npm

## Setup

Install dependencies:
   ```sh
   npm install
   ```

## Running Tests

To execute all tests:
```sh
npx playwright test 
```

## Project Structure

- `/tests` - Contains all test cases
- `/page` - Source code and utilities
- `/engine` - Entry point for all pages