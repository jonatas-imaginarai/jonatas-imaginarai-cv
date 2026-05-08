# Data Model: CV Website

## CV Structure (Trilingual)

The CV data will be stored as JSON objects for each locale (`pt`, `es`, `en`).

### Root Object (`[locale].json`)

| Field | Type | Description |
|-------|------|-------------|
| `profile` | `Profile` | Main identity and contact info |
| `experience` | `Experience[]` | Array of professional roles |
| `education` | `Education[]` | Array of academic achievements |
| `skills` | `SkillCategory[]` | Categorized tech stacks and skills |
| `languages` | `Language[]` | Proficiency in different languages |

### `Profile`

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Jonatas [Last Name] |
| `title` | `string` | Localized professional title |
| `headline` | `string` | Localized summary/headline paragraph |
| `photo` | `string` | Path to profile image |
| `contact` | `ContactInfo` | Email, LinkedIn, Github URLs |

### `Experience`

| Field | Type | Description |
|-------|------|-------------|
| `company` | `string` | Name of the organization |
| `role` | `string` | Localized job title |
| `period` | `string` | e.g., "2022 - Present" |
| `description` | `string[]` | Array of localized achievements |
| `location` | `string` | City, Country or Remote |

### `SkillCategory`

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Category name (e.g., "Frontend", "AI") |
| `items` | `string[]` | List of specific technologies |

### `Language`

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Language name (localized) |
| `level` | `string` | Proficiency (e.g., "Native", "Fluent") |
