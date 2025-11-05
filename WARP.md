# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Educational project for practicing SOLID principles and Clean Code in TypeScript using Vite. This is a vanilla TypeScript project focused on learning exercises.

## Commands

### Development
```powershell
# Install dependencies (using pnpm, yarn, or npm)
pnpm install
# or
yarn install
# or
npm install

# Start development server
pnpm dev
# or
yarn dev
# or
npm run dev
```

### Build & Preview
```powershell
# Build for production (TypeScript compilation + Vite build)
pnpm build
# or
yarn build
# or
npm run build

# Preview production build
pnpm preview
# or
yarn preview
# or
npm run preview
```

## Architecture

### Project Structure
- `src/main.ts` - Entry point that imports exercise modules and renders basic HTML
- `src/clean-code/` - Clean Code exercises and examples (numbered files like `01-names.ts`, `02-name-types.ts`, etc.)
- Entry point imports are changed in `main.ts` to run different exercises

### Development Pattern
This is an exercise-based codebase where:
1. Each exercise is in a separate file within `src/clean-code/`
2. To run a specific exercise, modify the import in `src/main.ts` to point to the desired file
3. Open browser console to see exercise output
4. Exercises are wrapped in IIFEs `(() => { ... })()`

### TypeScript Configuration
- Target: ESNext with strict mode enabled
- No emit (handled by Vite)
- Source maps enabled for debugging
- Strict type checking with unused parameter checks

## Clean Code Principles (from notas.txt)

When working with this codebase, follow these naming conventions and practices:

### Variables
- Use descriptive names: `numberOfUnits`, `tax`, `birthDate` (not `n`, `tx`, `ddmmyyy`)
- Arrays: Use plural names
- Booleans: Use `is`, `has`, `have` prefixes; store positive values
- Numbers: Use `min`, `max`, `total` prefixes where appropriate

### Classes
- Avoid redundant prefixes: Use `User` not `ClassUser`, `IUser`, or `UserImplementation`
- Name should describe what the class does, its specific task, and context if relevant

### Functions
- Use verb + noun pattern: `createMovie`, `getMovieById`, `updateUser`
- Maximum 3 parameters when declared inline
- Alphabetically order arguments when possible
- Keep functions small (less than 20 lines)
- Prefer single-line functions when they don't add complexity
- Avoid `else` statements; use early returns
- Prefer ternary operators for simple conditions
