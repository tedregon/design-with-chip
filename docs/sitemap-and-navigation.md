# Site map and navigation

This document reflects the migrated site structure (Make hub), current global navigation behavior, and all HTML entry points.

## Global navigation

The navbar is injected on pages that include `<div id="nav-placeholder"></div>` and load `js/nav.js`.

| Label | Visible in bar | Destination | Notes |
|--------|----------------|-------------|--------|
| **design with chip** | Yes (brand) | `/` | Bold, lowercase label |
| **Train** | Yes | `/` | Active on `/` and `/portfolioreviewer/` |
| **Hire** | No (hidden) | `/hire/` | Page exists, hidden until launch |
| **Make** | Yes | `/make/` | Active for routes starting with `/make/` |
| **Talk** | No (hidden) | `/talk/` | Page exists, hidden until launch |
| **About** | No (hidden) | `/about/` | Page exists, hidden until launch |
| **Contact** | Yes | [LinkedIn profile](https://www.linkedin.com/in/chip-rian/) | Opens in new tab |
| **Book a coaching call** | Yes (CTA) | Google Calendar booking link | Same URL as home “Book your session” flow |

### Active state rules

| Active key | When |
|------------|------|
| `train` | Home and `portfolioreviewer` routes |
| `make` | First path segment is `make` |
| `hire` | First path segment is `hire` |
| `talk` | First path segment is `talk` |
| `about` | First path segment is `about` |
| *(none)* | Other routes like `/sudoku/` and `/privacy/` |

## URLs in `sitemap.xml`

| URL | Priority | Change frequency |
|-----|----------|------------------|
| https://chipdoes.app/ | 1.0 | weekly |
| https://chipdoes.app/make/ | 0.9 | weekly |
| https://chipdoes.app/make/drafts/ | 0.75 | monthly |
| https://chipdoes.app/make/mobile/ | 0.75 | monthly |
| https://chipdoes.app/make/vigor/ | 0.8 | monthly |
| https://chipdoes.app/make/acting-coach/ | 0.8 | monthly |
| https://chipdoes.app/make/wordjam/ | 0.85 | monthly |
| https://chipdoes.app/make/wordjam/playwordjam/ | 0.9 | weekly |
| https://chipdoes.app/portfolioreviewer/ | 0.85 | monthly |
| https://chipdoes.app/sudoku/ | 0.6 | monthly |
| https://chipdoes.app/privacy/ | 0.3 | yearly |

## All `index.html` pages in this project

There are **21** HTML entry points.

| Repository path | Public URL | Status |
|-------------------|------------|--------|
| `index.html` | https://chipdoes.app/ | Canonical |
| `make/index.html` | https://chipdoes.app/make/ | Canonical |
| `make/drafts/index.html` | https://chipdoes.app/make/drafts/ | Canonical |
| `make/mobile/index.html` | https://chipdoes.app/make/mobile/ | Canonical |
| `make/vigor/index.html` | https://chipdoes.app/make/vigor/ | Canonical |
| `make/acting-coach/index.html` | https://chipdoes.app/make/acting-coach/ | Canonical |
| `make/wordjam/index.html` | https://chipdoes.app/make/wordjam/ | Canonical |
| `make/wordjam/playwordjam/index.html` | https://chipdoes.app/make/wordjam/playwordjam/ | Canonical |
| `portfolioreviewer/index.html` | https://chipdoes.app/portfolioreviewer/ | Canonical |
| `sudoku/index.html` | https://chipdoes.app/sudoku/ | Canonical |
| `privacy/index.html` | https://chipdoes.app/privacy/ | Canonical (non-nav legal page, linked from app pages/App Store) |
| `hire/index.html` | https://chipdoes.app/hire/ | Hidden nav page |
| `talk/index.html` | https://chipdoes.app/talk/ | Hidden nav page |
| `about/index.html` | https://chipdoes.app/about/ | Hidden nav page |
| `make/mycommunity/index.html` | https://chipdoes.app/make/mycommunity/ | Draft page (not linked in Make yet) |
| `make/saas-reviewer/index.html` | https://chipdoes.app/make/saas-reviewer/ | Draft page (not linked in Make yet) |
| `archive/work/index.html` | https://chipdoes.app/archive/work/ | Archived |
| `archive/coaching/index.html` | https://chipdoes.app/archive/coaching/ | Archived |
| `portfolio/index.html` | https://chipdoes.app/portfolio/ | Legacy redirect to `/make/` |
| `portfolio/drafts/index.html` | https://chipdoes.app/portfolio/drafts/ | Legacy redirect to `/make/drafts/` |
| `portfolio/mobile/index.html` | https://chipdoes.app/portfolio/mobile/ | Legacy redirect to `/make/mobile/` |

## Notes

- Root shortcut files like `vigor.html`, `wordjam.html`, and similar redirect stubs were removed.
- Legacy `portfolio/*` routes are retained as directory-level redirects to preserve existing links while canonical URLs live under `/make/`.
- `privacy/index.html` remains intentionally unlinked from primary nav.