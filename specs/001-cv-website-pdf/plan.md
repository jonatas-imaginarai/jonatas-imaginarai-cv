# Implementation Plan: Personal CV Website (Next.js)

**Branch**: `001-cv-website-pdf` | **Date**: 2026-05-08 | **Spec**: [specs/001-cv-website-pdf/spec.md](spec.md)
**Input**: Feature specification from `/specs/001-cv-website-pdf/spec.md`

## Summary

Build a high-ticket, trilingual (PT-BR, ES-AR, EN-USA) personal CV website using Next.js 14+ App Router. The site will feature a cinematic Hero section and a dynamic PDF generation engine that allows users to download the CV in their chosen language while maintaining visual consistency with the "Imaginar.ai" design DNA.

## Technical Context

**Language/Version**: TypeScript, Next.js 14+ (App Router)  
**Primary Dependencies**: `next-intl` (i18n), `framer-motion` (animations), `react-pdf` or server-side Puppeteer (PDF generation), `lucide-react` (icons), `tailwind-merge` + `clsx`.  
**Storage**: Local JSON/Markdown files for trilingual CV data.  
**Testing**: Playwright for E2E and PDF validation.  
**Target Platform**: Vercel.
**Project Type**: Web-based CV / Portfolio.  
**Performance Goals**: Lighthouse 95+ across all categories; LCP < 2s.  
**Constraints**: PDF generation MUST handle pagination for all 3 languages; UI MUST be responsive.  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Precision Gate**: Is every decorative element justified by structural or communicative need? (Principle I) -> *Checked: Spec mandates "intentional elements only".*
- [x] **Typography Gate**: Are Satoshi and Geist Mono used correctly for hierarchy? (Principle II) -> *Checked: Defined in DR-002.*
- [x] **Bilingual Gate**: Does the layout account for Spanish and Portuguese text length variations? (Principle III) -> *Checked: Expanded to Trilingual Fluidity in DR-003.*
- [x] **Elegance Gate**: Are OKLCH colors, glassmorphism, and fine lines (border/10) correctly applied? (Principle IV) -> *Checked: Defined in DR-004.*
- [x] **Tone Gate**: Is the background using the "Cold Architectural" oklch(0.99 0.005 240) tint? (Principle V) -> *Checked: Defined in DR-005.*

## Project Structure

### Documentation (this feature)

```text
specs/001-cv-website-pdf/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── app/                 # Next.js App Router (i18n localized routes)
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
├── components/          # Shared UI components
│   ├── ui/              # Primitive components (Button, Card)
│   ├── hero/            # Hero section components
│   └── cv/              # CV specific components (Experience, Skills)
├── lib/                 # Utilities (i18n config, PDF generator)
├── data/                # CV content in PT, ES, EN
├── styles/              # Global styles (Tailwind, Satoshi font)
└── public/              # Assets (Profile photo, static PDFs if any)
```

**Structure Decision**: Standard Next.js App Router with localized routing via `[locale]` segments.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
