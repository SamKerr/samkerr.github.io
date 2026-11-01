```
                        _                                 _  _    _             _         _
 ___   __ _  _ __ ___  | | __  ___  _ __  _ __      __ _ (_)| |_ | |__   _   _ | |__     (_)  ___
/ __| / _` || '_ ` _ \ | |/ / / _ \| '__|| '__|    / _` || || __|| '_ \ | | | || '_ \    | | / _ \
\__ \| (_| || | | | | ||   < |  __/| |   | |    _ | (_| || || |_ | | | || |_| || |_) | _ | || (_) |
|___/ \__,_||_| |_| |_||_|\_\ \___||_|   |_|   (_) \__, ||_| \__||_| |_| \__,_||_.__/ (_)|_| \___/
                                                   |___/
```

# samkerr.github.io

Personal site for Sam Kerr: projects, CV and blog. Built with [Astro](https://astro.build) and hosted on GitHub Pages at <https://samkerr.github.io>.

## Development

Run from the repo root:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |

## Editing content

Most content lives in data files, not in the page markup:

- **Projects** (home page): `src/data/projects.ts`. Each project has a `category` (see `categories` at the top of the file). Projects show in the order they appear in the array. `liveUrl` is optional.
- **CV**: `src/data/cv.ts`. Holds the summary and the list of roles, and is kept short on purpose.
- **Blog posts**: Markdown files in `src/content/blog/`. The frontmatter schema is in `src/content.config.ts`. Only posts with `public: true` appear on the blog list. Posts with `public: false` still get a page at `/blog/<slug>`, so anyone with the link can read them.
- **Images and static files**: `public/assets/`, referenced as `/assets/...`.

## Structure

```
src/
  components/   UI components (Nav, Hero, Footer, …)
  content/blog/ Blog posts (Markdown)
  data/         Projects and CV data
  layouts/      Base page layout
  pages/        Routes: index, cv, blog, 404
  styles/       Global CSS
```

`/projects` redirects to `/` (configured in `astro.config.mjs`).

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site with `withastro/action` and deploys it to GitHub Pages. You can also run it manually from the Actions tab.
