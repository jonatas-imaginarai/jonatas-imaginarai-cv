# Tasks: Personal CV Website (Next.js)

**Input**: Design documents from `/specs/001-cv-website-pdf/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are OPTIONAL - only include them if explicitly requested. (None requested for this phase).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Next.js 14+ project with TypeScript and App Router
- [x] T002 Install primary dependencies: `next-intl`, `framer-motion`, `lucide-react`, `sparticuz-chromium`, `puppeteer-core`, `tailwind-merge`, `clsx`
- [x] T003 Configure fonts (Satoshi, Geist Mono) in `public/fonts/` and `src/app/layout.tsx`
- [x] T004 [P] Configure Tailwind with OKLCH color palette in `tailwind.config.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T005 [P] Create trilingual data structure in `src/data/pt.json`, `src/data/es.json`, `src/data/en.json`
- [x] T006 [P] Configure `next-intl` i18n routing and middleware in `src/i18n.ts` and `src/middleware.ts`
- [x] T007 Implement server-side PDF generation utility in `src/lib/pdf.ts` using Puppeteer
- [x] T010 [P] Create base UI components (Container, Button, Card) with "Imaginar.ai" styling in `src/components/ui/`

---

## Phase 3: User Story 3 - Switch Website Language (Priority: P1)

**Goal**: Support reading the website in English, Spanish, or Portuguese comfortably.

**Independent Test**: Navigate to the site, use the language toggle, and verify that all content translates correctly without layout breaks.

- [x] T011 [P] [US3] Create LanguageToggle component in `src/components/LanguageToggle.tsx`
- [x] T012 [US3] Implement localized home page shell in `src/app/[locale]/page.tsx`

---

## Phase 4: User Story 1 - View Professional Profile (Priority: P1) 🎯 MVP

**Goal**: Present a high-quality professional profile with Hero section and CV details.

**Independent Test**: Verify Hero section elements (Photo, Title, Headline, Contacts) and all CV sections (Experience, Skills, Education, Languages) are rendered and visually polished.

- [x] T013 [P] [US1] Implement Hero section with photo and contact buttons in `src/components/hero/Hero.tsx`
- [x] T014 [P] [US1] Implement Professional Experience section in `src/components/cv/Experience.tsx`
- [x] T015 [P] [US1] Implement Stacks & Skills section in `src/components/cv/Skills.tsx`
- [x] T016 [P] [US1] Implement Education and Languages sections in `src/components/cv/EducationLanguages.tsx`
- [x] T017 [US1] Assemble all sections on the localized home page in `src/app/[locale]/page.tsx`

---

## Phase 5: User Story 2 - Download CV as PDF with Language Selection (Priority: P1)

**Goal**: Enable downloading the CV as a PDF in the user's preferred language.

**Independent Test**: Click "Download PDF", select a language, and verify the resulting PDF is correctly generated and formatted.

- [ ] T018 [US2] Create PDF Language Selection Modal in `src/components/cv/PdfModal.tsx`
- [ ] T019 [US2] Implement PDF generation API endpoint in `src/app/api/pdf/[locale]/route.ts`
- [ ] T020 [US2] Integrate PDF download trigger into the UI in `src/components/cv/DownloadButton.tsx`

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T021 Verify compliance with Constitution Core Principles (Precision, Typography, Trilingual Fluidity, Elegance, Tone)
- [ ] T022 [P] Implement cinematic staggered fade animations using Framer Motion
- [ ] T023 Optimize images and assets using `next/image` for SC-001 targets
- [ ] T024 Perform mobile responsiveness audit and fine-tuning
- [ ] T025 Run final Lighthouse audit to verify SC-003 success

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Story 3 (Phase 3)**: Depends on Foundational completion.
- **User Story 1 (Phase 4)**: Depends on US3 completion.
- **User Story 2 (Phase 5)**: Depends on US1 completion (needs content to render in PDF).
- **Polish (Final Phase)**: Depends on all user stories.

---

## Implementation Strategy

### MVP First (User Story 1 & 3)

1. Complete Setup and Foundational phases.
2. Implement Trilingual routing (US3).
3. Implement the full CV content and Hero (US1).
4. **STOP and VALIDATE**: Verify the web CV looks and feels premium in all 3 languages.

### Incremental Delivery

1. Add PDF download capability (US2).
2. Apply final cinematic polish and performance optimizations.
