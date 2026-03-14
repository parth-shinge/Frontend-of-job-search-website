# Frontend of Job Search Website

A static frontend web project for an inclusive job-search experience, designed around accessibility-focused job discovery and profile workflows.

## Project Overview

This repository contains a multi-page website built with:

- HTML5
- CSS3
- Vanilla JavaScript

The platform presents job opportunities, company detail pages, user registration/login pages, profile pages, and interactive sections powered by browser localStorage.

## Key Features

- Multi-page frontend experience (`index`, `about`, `jobs`, `contact`, `register`, `login`, `profiles`)
- Company-specific job pages under `frontend/company_pages`
- Registration form validation and localStorage persistence
- Dynamic job/company card update flow (`club_committee.js`)
- Success story submission and mailto export flow (`success_stories.js`)
- Media-rich UI (hero sections, background video, image cards)

## Repository Structure

```text
frontend/
  about.html
  club_committee.js
  contact.html
  index.html
  jobs.html
  login.html
  profiles.html
  register.html
  styles.css
  success_stories.js
  valid.js
  company_pages/
  htdocs/
media/
```

## Technical Analysis

### Architecture

- Frontend-only website (no application backend in this repository)
- Data persistence uses browser localStorage and a JSON placeholder file
- Static assets are expected to be served from the repo root

### Observations

- Navigation uses a mix of relative and absolute paths (for example `/frontend/...` and `index.html`)
- `jobs.html` embeds large base64 images directly in HTML, increasing page size
- Form flows are currently client-side only; no server-side validation/storage exists in this codebase

### Suggested Improvements

- Normalize all route paths for easier deployment under subpaths
- Move base64-embedded images into optimized image assets
- Add semantic landmarks, ARIA labels, and accessibility testing checks
- Introduce linting/formatting workflow for maintainability
- Add end-to-end tests for critical user flows

## Getting Started

### Option 1: Open directly

Open `frontend/index.html` in a browser.

### Option 2: Run a local static server (recommended)

From repository root:

```bash
python -m http.server 8000
```

Then visit:

`http://localhost:8000/frontend/index.html`

## Dependencies

This project has no third-party runtime dependencies.

- JavaScript: vanilla (no npm packages required)
- Python: only optional for local static serving

See `requirements.txt` for environment notes.
