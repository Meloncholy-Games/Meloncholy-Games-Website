# CLAUDE.md

This file provides guidance for Claude Code when working with the Meloncholy Games Website codebase.

## Project Overview

A React-based marketing website for Meloncholy Games, an indie game development studio. The site showcases their game "Project Cantaloupe" and serves as a platform for community engagement.

## Tech Stack

- **Framework:** React 19 with TypeScript 5
- **Build Tool:** Vite 7
- **UI Library:** Material-UI (MUI) 7
- **Routing:** React Router DOM 7
- **Animations:** Framer Motion
- **Styling:** Emotion (CSS-in-JS)
- **Testing:** Jest 30 + React Testing Library
- **Linting:** ESLint 9 + Prettier
- **Infrastructure:** AWS CDK

## Project Structure

```
src/
├── components/          # React components
│   ├── home/           # Home page components
│   ├── about/          # About page components
│   ├── cantaloupe/     # Project Cantaloupe game page
│   ├── contact/        # Contact page
│   └── shared/         # Reusable components (Header, Footer, etc.)
├── hooks/              # Custom React hooks
├── theme/              # MUI theme configuration
├── constants/          # Site configuration and constants
├── assets/             # Static assets (images)
└── index.tsx           # Entry point

tst/                    # Test files (mirrors src structure)
public/                 # Static public assets (favicons, manifest)
```

## Common Commands

```bash
# Development
npm start              # Start dev server on port 3000

# Code Quality
npm run lint           # Run ESLint
npm run format         # Auto-format with Prettier
npm run check-format   # Check formatting without fixing
npm run types          # TypeScript type checking

# Testing
npm run test           # Run Jest tests

# Build & Deploy
npm run build          # Production build to dist/
npm run clean          # Remove build artifacts
npm run deploy         # Deploy with AWS CDK
```

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Landing page |
| `/about` | About | Team and company info |
| `/project-cantaloupe` | CantaloupePage | Game showcase |
| `/contact` | Contact | Contact form |

## Code Style

- **Formatting:** Prettier (100 char width, 4-space tabs, no trailing commas)
- **Linting:** ESLint with TypeScript strict checking
- **Components:** Functional components with hooks
- **Styling:** MUI's `sx` prop and Emotion styled components

## Theme System

The site supports dark/light mode based on user preference (`prefers-color-scheme`).

Theme configuration is in `src/theme/theme.ts`.

## Testing Guidelines

- Test files go in `tst/components/` mirroring the `src/components/` structure
- Use React Testing Library for component testing
- Run `npm run test` to execute all tests

## CI/CD

GitHub Actions run on PRs to main:
- Format checking (`npm run check-format`)
- Linting (`npm run lint`)

## Key Files

- `src/constants/siteConfig.ts` - Site metadata, routes, social links
- `src/theme/theme.ts` - MUI theme with dark/light mode
- `vite.config.ts` - Vite build configuration
- `jest.config.js` - Jest test configuration
- `eslint.config.ts` - ESLint rules
