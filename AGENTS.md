# Repository Guidelines

## Project Structure & Module Organization
This is a Vite + React + TypeScript app. Main source code lives in `src/`.
- `src/app/`: app bootstrap, Redux store, RTK Query base API.
- `src/features/`: feature modules (`auth`, `todolists`) with `api/`, `lib/`, and `ui/`.
- `src/common/`: shared components, hooks, constants, routing, theme, utils, and types.
- `public/`: static assets served as-is.

Use the `@/` alias for imports from `src` (example: `@/common/hooks`).

## Build, Test, and Development Commands
- `pnpm i`: install dependencies.
- `pnpm dev`: run local dev server on `http://localhost:3000`.
- `pnpm build`: type-check with `tsc -b` and build production bundle.
- `pnpm preview`: preview the production build locally.
- `pnpm test`: run Vitest in watch mode.

Example:
```bash
pnpm dev
pnpm test
```

## Coding Style & Naming Conventions
- TypeScript is strict (`strict: true`); keep types explicit for public APIs and shared utilities.
- Prettier is configured with `printWidth: 120` and `semi: false`.
- Use 2-space indentation (match existing files).
- Components: PascalCase file/folder names (for example `Login.tsx`, `TodolistItem.tsx`).
- Hooks/utilities: camelCase (for example `useAppDispatch.ts`, `handleError.ts`).
- Prefer feature-first placement: keep feature-specific code under `src/features/<feature>`.

## Testing Guidelines
- Framework: Vitest (`pnpm test`).
- Place tests close to source files using `*.test.ts`, `*.test.tsx`, or `*.spec.ts`.
- Prioritize tests for reducers, API helpers, and form/interaction behavior in feature UI.
- Add regression tests for bug fixes before merging.

## Commit & Pull Request Guidelines
- Use short, imperative commit messages (example: `Fix login error handling`).
- Keep commits focused; avoid mixing refactors with behavior changes.
- PRs should include a clear summary of what changed and why.
- Link the related issue/task when available.
- Add screenshots or a short video for UI changes.
- Include test notes (`pnpm test`, manual checks).

## Security & Configuration Tips
- Keep secrets in `.env`; do not commit sensitive values.
- Do not hardcode tokens/credentials outside local development helpers.
