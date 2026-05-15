# JAIN Online Landing Page

A responsive marketing landing page for **JAIN Online Programs**, designed to showcase the university's online MBA / MCA / M.Com offerings, faculty, rankings, alumni stories, and lead-capture form.

## Description

This is a single-page static website built as a high-conversion landing page. It covers the full marketing funnel — hero, program list, academic approach, rankings, micro-credentials, faculty, employers, testimonials, alumni, FAQ, and an "Apply Now" form — all rendered from a single `index.html` file with section-scoped Tailwind utilities.

## Tech Stack

- **HTML5** — semantic markup
- **Tailwind CSS** (via CDN) — utility-first styling with a custom theme (`primary`, `secondary`, `tertiary` colors; `Inter` + `Poppins` fonts)
- **Vanilla JavaScript** — scroll reveal, carousels, form interactions
- **Google Fonts** — Inter, Poppins

No build step, no framework, no package manager.

## Requirements

- A modern browser (Chrome, Firefox, Safari, Edge)
- Internet connection (Tailwind, Google Fonts, and images load from CDNs / remote sources)
- *(Optional)* Any static file server — Python, Node, VS Code Live Server, etc. — for local development

## Project Structure

```
agent-jo-langing-page/
├── index.html              # Entire landing page (all sections + inline styles + scripts)
├── README.md
└── assets/                 # Section-scoped images
    ├── about/
    ├── alumni/
    ├── brand/
    ├── employers/
    ├── faculty/
    ├── hero/               # hero-banner.png, logo.svg, ...
    ├── impactful-minds/
    ├── linkedin/
    ├── micro-credentials/
    ├── programs/           # mba.png, mca.png, mcom.png, ...
    ├── recognitions/
    └── testimonials/
```

Page sections (in order, see [index.html](index.html)): hero → programs → academic-approach → rankings → micro-credentials → faculty → employers → testimonials → alumni → apply-now → faq.

## Run Methods

The page is fully static — open it directly or serve it locally.

**Option 1 — Open directly**

```bash
xdg-open index.html        # Linux
open index.html            # macOS
start index.html           # Windows
```

**Option 2 — Python static server**

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

**Option 3 — Node static server**

```bash
npx serve .
# or
npx http-server -p 8000
```

**Option 4 — VS Code**

Install the *Live Server* extension, right-click `index.html` → **Open with Live Server**.
