<!--
<sync_impact_report>
- Version change: 0.0.0 -> 1.0.0
- List of modified principles:
  - [PRINCIPLE_1_NAME] -> I. Precision over Decoration
  - [PRINCIPLE_2_NAME] -> II. Confidence through Typography
  - [PRINCIPLE_3_NAME] -> III. Bilingual Fluidity
  - [PRINCIPLE_4_NAME] -> IV. Futuristic Elegance
  - [PRINCIPLE_5_NAME] -> V. Cold Architectural Tone
- Added sections:
  - Technical Standards
  - Visual DNA
- Removed sections: None
- Templates requiring updates:
  - jonatas-imaginarai-cv/.specify/templates/plan-template.md (✅ updated)
  - jonatas-imaginarai-cv/.specify/templates/tasks-template.md (✅ updated)
- Follow-up TODOs: None
</sync_impact_report>
-->

# Imaginarai CV Constitution

## Core Principles

### I. Precision over Decoration
Every element (line, border, animation) must feel intentional and engineered. No unnecessary visual noise; every decorative choice must serve a structural or communicative purpose. Design should be "architectural" rather than purely aesthetic.

### II. Confidence through Typography
Large, bold, and unique headings that command attention. Use Satoshi for body and UI elements, and Geist Mono for labels and technical details. Typography is the primary driver of visual hierarchy and the "high-ticket" boutique feel.

### III. Bilingual Fluidity
Layouts MUST be optimized for the varied word lengths and syntactic structures of Spanish and Portuguese. UI components SHOULD gracefully handle expansion and contraction of text without breaking the visual rhythm or overlapping elements.

### IV. Futuristic Elegance
Utilize subtle motion, glass-like textures (glassmorphism), and high-ticket finishes like ultra-fine lines and OKLCH colors. The interface should feel "alive" and sophisticated through cinematic spotlights and aurora text effects that avoid visual clutter.

### V. Cold Architectural Tone
Maintain a "Cold" tone by ensuring backgrounds have a slight blue tint (oklch hue 240) rather than pure white/gray. This reinforces the "Architectural/Research Lab" aesthetic which signals reliability, precision, and premium quality.

## Technical Standards

- **Color Space**: Exclusively use OKLCH for perceptual uniformity and modern browser support.
- **Spacing**: Follow a strict vertical rhythm using `py-16` to `py-24` for sections and `gap-4` to `gap-12` for content grouping.
- **Readability**: Restrict body text to `max-w-2xl` or `max-w-4xl` to ensure optimal line length.
- **Interactions**: Use `cubic-bezier(0.25, 1, 0.5, 1)` for core easing. All page transitions should use staggered fades for a cinematic feel.

## Visual DNA

- **Glassmorphism**: Navigation bars and sticky elements MUST use `bg-background/80 backdrop-blur-md` for depth.
- **Shadows**: Use cinematic shadows—large, soft, very low opacity (e.g., `shadow-primary/5`), creating atmospheric depth.
- **Borders**: Base radius of `1rem`. Standard cards use `rounded-2xl`, while featured or hero elements use `rounded-3xl` or `rounded-[2.5rem]`.
- **Fine Lines**: Avoid heavy borders. Use ultra-fine `border-border/10` or `border-primary/20`.

## Governance

- This Constitution supersedes all other design and development practices within the Imaginarai CV project.
- All Pull Requests and design reviews MUST verify compliance with the Core Principles and Technical Standards.
- Any deviation from these principles MUST be explicitly justified in the Implementation Plan under "Complexity Tracking".
- Amendments to this constitution require documentation, a version increment (SEMVER), and a migration plan for existing components if changes are breaking.

**Version**: 1.0.0 | **Ratified**: 2026-05-08 | **Last Amended**: 2026-05-08
