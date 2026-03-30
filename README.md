# monoorbit-ds

Angular-first design system built on a framework-agnostic core of tokens and utilities.

This project started as a porting and extraction effort from an existing Angular-based design system. The goal is to externalize and modernize that foundation into a reusable, framework-agnostic system by standardizing design tokens, improving consistency, and refining the overall architecture.

The refactor is still ongoing. While a significant portion of the design tokens and component structure has been standardized, parts of the codebase still reflect legacy patterns. In particular, some styles are still using hardcoded values or ad-hoc CSS properties that should be migrated to design tokens or CSS variables.

This repository documents that transition: from a tightly coupled application-specific UI layer to a more scalable and maintainable system. The Angular library, demo app, and Storybook serve both as implementation and as a living playground for incremental improvements.

Although Angular is the primary implementation, the styling layer is designed to be framework-agnostic and can be consumed by other environments (React, Vue, or plain HTML) through exported SCSS and CSS artifacts.

## Quick Start

```
npm i
npm run storybook
```

Storybook runs at `http://localhost:6006` and documents every component together with the design tokens.

## Architecture

The source lives inside `src/`. The project is split in three intent-driven areas that share the same token layer:

- `src/lib/foundations/` exposes design tokens as SCSS variables (`_tokens.scss`), CSS custom properties (`tokens.css`), and JSON (`tokens.json`), covering color, spacing, radius, elevation, z-index, and motion.
- `src/lib/styles/` builds utility classes (typography, grid, buttons, cards, tooltips, mixins) on top of the core tokens so any consumer can import `styles/index.scss` or the compiled CSS bundle.
- `src/lib/components/` implements 13 standalone Angular components that consume the foundations layer and expose a `ds-` prefixed API.
- `src/stories/` contains Storybook stories, MDX guides, and the interactive playground for every component, ensuring the UI kit is documented and testable in isolation.

## Design Tokens

The token catalog is sourced from `src/lib/foundations/_tokens.scss` and mirrored in `tokens.css` / `tokens.json` so the same values can drive other platforms.

| Category | Example values |
|----------|----------------|
| Colors | `$color-brand` `#1f4fd1`, `$color-highlight` `#0f9f8c`, `$color-danger` `#d92d20` |
| Spacing | `$space-1` .. `$space-8` (4px to 48px) |
| Radius | `$radius-1` `8px`, `$radius-2` `16px`, `$radius-3` `24px` |
| Elevation | `$elevation-1` .. `$elevation-3`, `$elevation-card` |
| Typography | System font stack with weight scale 300-900 |

## Component Library

| Component | Selector | Description |
|-----------|----------|-------------|
| Button | `ds-button` | Variants, sizes, loading state, block option |
| Input Field | `ds-input-field` | Text/password/textarea with validation states |
| Checkbox | `ds-checkbox` | Accessible checkbox with `ControlValueAccessor` |
| Radio Button | `ds-radio-button` | Radio inputs that work with reactive forms |
| Search Select | `ds-search-select` | Filterable dropdown with keyboard navigation |
| Accordion | `ds-accordion` | Expandable/collapsible sections |
| Tabs | `ds-tabs` | Tabbed navigation with API for tabs/panels |
| Modal | `ds-modal` | Dialog with overlay, ESC close, and focus trapping |
| Card | `ds-card` | Layout card that supports horizontal or vertical media |
| Loader | `ds-loader` | Spinner with optional overlay mode |
| Progress Bar | `ds-progress-bar` | Steps or progress indicator with labels |
| Scroll Top | `ds-scroll-top` | Floating back-to-top button |
| Drag & Drop | `ds-drag-drop` | File upload with drag zone and native drop handling |

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run storybook` | Start Storybook dev server |
| `npm run build-storybook` | Build the static Storybook site |
| `npm run build:lib` | Build the Angular library (`monoorbit-ds-lib`) |
| `npm run build:app` | Build the demo Angular app (`monoorbit-ds`) |
| `npm run typecheck` | Run `ngc` against the app, documentation, and library configs |

## Workspace Layout

```
src/
|-- lib/
|   |-- foundations/    # design tokens and CSS vars
|   |-- styles/         # utility layer on top of tokens
|   |-- components/     # standalone Angular implementations
|   |-- index.ts        # Angular exports behind the public API
|-- stories/            # Storybook stories, MDX content, docs
|-- styles.scss         # demo app entry point styles
|-- main.ts
|-- public-api.ts
```

## License

MIT
