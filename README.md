# Practical Algorithm Website

Company website and blog for **Practical Algorithm, Inc.** (`practicalalgorithm.com`), built with [AstroWind](https://github.com/arthelokyo/astrowind) (Astro 7 + Tailwind CSS v4) and deployed to GitHub Pages.

## Commands

| Command           | Action                                            |
| :---------------- | :------------------------------------------------ |
| `npm install`     | Install dependencies                              |
| `npm run dev`     | Start local dev server at `http://localhost:4321` |
| `npm run build`   | Build static site into `./dist/`                  |
| `npm run preview` | Preview the built site locally                    |
| `npm run check`   | Run `astro check`, ESLint, and Prettier checks    |
| `npm run fix`     | Auto-fix ESLint and Prettier formatting issues    |

## Key Files

- `src/config.yaml` — Site metadata, URL (`https://practicalalgorithm.com`), blog settings, and theme preference
- `src/navigation.ts` — Header navigation, CTA button, footer links, and social icons
- `src/components/CustomStyles.astro` — Brand color palette and typography tokens (light & dark mode)
- `src/pages/` — Site pages (`/`, `/services`, `/about`, `/contact`, `/thankyou`, `/blog/...`, `/rss.xml`, `/404`)
- `src/data/post/` — Blog articles in Markdown (`.md`) or MDX (`.mdx`)
- `public/CNAME` — Custom domain configuration for GitHub Pages (`practicalalgorithm.com`)
- `.github/workflows/gh-pages.yml` — Automated GitHub Pages build and deployment workflow
