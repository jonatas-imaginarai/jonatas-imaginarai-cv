# Research: CV Website Implementation

## i18n Strategy (Trilingual Support)

- **Decision**: Use `next-intl`.
- **Rationale**: 
  - Native support for Next.js App Router and Server Components.
  - Supports localized routing (`/[locale]/...`).
  - Provides a clean way to manage JSON-based translations for PT, ES, and EN.
  - Excellent type-safety for translation keys.
- **Alternatives considered**: 
  - `next-i18n-router`: Good for routing but less integrated for translations.
  - Custom middleware: High maintenance cost.

## PDF Generation Strategy

- **Decision**: Server-side PDF generation using Puppeteer (via `sparticuz-chromium`).
- **Rationale**: 
  - **Visual Fidelity**: Since the project mandates strict design principles (OKLCH, Satoshi font, fine lines), Puppeteer ensures the PDF is a pixel-perfect render of the web version.
  - **Ease of Maintenance**: We don't have to duplicate styling in a separate library like `react-pdf`. We simply create a "print-optimized" view of the CV page.
  - **Dynamic Content**: Easily handles trilingual data by just navigating to the correct localized URL.
- **Alternatives considered**: 
  - `react-pdf`: Rejected because it requires recreating the entire UI using its own primitives, making it hard to maintain the "Imaginar.ai" DNA.
  - `jspdf`: Limited CSS support and often produces lower quality results for complex layouts.

## Font Management (Satoshi & Geist Mono)

- **Decision**: Host fonts locally in `public/fonts` and use `next/font/local`.
- **Rationale**: 
  - Ensures fonts are available for both web rendering and Puppeteer's PDF generation.
  - Avoids external dependencies or layout shifts.

## Data Structure for CV Content

- **Decision**: Use TypeScript files or JSON under `src/data/[locale].json`.
- **Rationale**: Allows for easy importation into both the Next.js pages and the i18n configuration.
