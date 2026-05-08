# Feature Specification: Personal CV Website (Next.js)

**Feature Branch**: `001-cv-website-pdf`  
**Created**: 2026-05-08  
**Status**: Draft  
**Input**: User description: "Next.js CV online page with a button to download the CV as PDF."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Professional Profile (Priority: P1)

As a potential employer or collaborator, I want to visit the website and see a high-quality, professional CV so that I can quickly assess Jonatas's skills and experience. The Hero section must immediately present Jonatas's photo, professional title, and a compelling headline alongside contact options.

**Why this priority**: This is the core purpose of the website. It establishes the professional presence.

**Independent Test**: Verify that the Hero section contains: Photo, Title Phrase, Headline Paragraph, and Contact Buttons. Ensure sections for Education, Stacks & Skills, Languages, and Professional Experience are rendered.

**Acceptance Scenarios**:

1. **Given** the user navigates to the home page, **When** the page loads, **Then** they see a visually polished Hero section with Jonatas's photo, title, and headline.
2. **Given** the Hero section is visible, **When** the user looks for contact info, **Then** they see interactive buttons for direct contact (e.g., Email, LinkedIn).
3. **Given** the user scrolls down, **When** they navigate the page, **Then** they see clearly defined sections for: Professional Experience (most important), Stacks & Skills, Education, and Languages.

---

### User Story 2 - Download CV as PDF with Language Selection (Priority: P1)

As a recruiter, I want to download a PDF version of the CV in a specific language (PT-BR, ES-AR, or EN-USA) so that I can have a local copy tailored to my region's language.

**Why this priority**: Recruiters often need the CV in a specific language for their internal processes.

**Independent Test**: Click the "Download PDF" button, select a specific language (e.g., Spanish-AR), and verify the resulting PDF is in that language and maintains professional formatting.

**Acceptance Scenarios**:

1. **Given** the user clicks "Download PDF", **When** a language selector appears, **Then** they can choose between Portuguese (BR), Spanish (AR), and English (USA).
2. **Given** a language is selected, **When** the download completes, **Then** the PDF content matches the selected language perfectly.

---

### User Story 3 - Switch Website Language (Priority: P1)

As a global visitor, I want to read the entire website in English, Spanish, or Portuguese so that I can understand the content comfortably.

**Why this priority**: Essential for a global professional profile.

**Independent Test**: Toggle the website language and verify that all content (including Hero headline and experience details) updates to the selected language.

**Acceptance Scenarios**:

1. **Given** the user selects a language from the website toggle, **When** the change is applied, **Then** the UI and all CV content translate without breaking the "Futuristic Elegance" design.

### Edge Cases

- **PDF Generation per Language**: Ensuring that the dynamic PDF generator correctly maps data for all three languages.
- **Bilingual/Trilingual Layout Breaks**: Ensuring that long German-like word lengths in any language don't break the fine-line border design.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST be built using Next.js (App Router) for the frontend.
- **FR-002**: Hero Section MUST include: Profile Photo, Professional Title Phrase, Headline Paragraph, and Contact Buttons.
- **FR-003**: System MUST support three languages for both Website and PDF: Portuguese (BR), Spanish (AR), and English (USA).
- **FR-004**: System MUST include sections for: Professional Experience, Stacks & Skills, Education, and Languages.
- **FR-005**: System MUST provide a "Download PDF" feature with a language selection modal/trigger.
- **FR-006**: System MUST generate high-quality PDFs matching the website's professional aesthetic.

### Design & Aesthetic Requirements (Constitution Alignment)

- **DR-001**: Components MUST adhere to the **Precision over Decoration** principle.
- **DR-002**: Typography MUST follow the **Confidence through Typography** standard (Satoshi/Geist Mono).
- **DR-003**: UI MUST be validated for **Trilingual Fluidity** (PT, ES, EN).
- **DR-004**: Visuals MUST implement **Futuristic Elegance** (OKLCH, Glassmorphism, Fine Lines).
- **DR-005**: Backgrounds MUST maintain the **Cold Architectural Tone** (oklch hue 240).

### Key Entities

- **Profile**: Name, Photo URL, Title, Headline, Contact Links.
- **Experience**: Company, Role, Dates, Description (Trilingual).
- **Skill/Stack**: Tech stack name, Category, Icon (optional).
- **Language**: Language name, Proficiency level.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Website language switch completes in under 300ms without full page reload.
- **SC-002**: PDF language selection to download start takes less than 1 second.
- **SC-003**: 100% of CV content is accurately translated across all 3 supported languages.
- **SC-004**: The Hero section maintains its visual integrity across all screen sizes (Responsive Design).

## Assumptions

- Jonatas will provide the initial content (Experience, Skills, etc.) in a structured format (JSON or Markdown).
- The PDF generation will be handled via a library compatible with Next.js (e.g., `react-pdf` or a server-side equivalent).
- The site will be hosted on Vercel for optimal Next.js integration.
