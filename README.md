# React Static Site

### A GitHub Pages Starting Point

## About Project

This template repository is a great starting point for a github pages static website. Utilizing Node, Vite, and React, the template is ready for both development and production.

The template comes bundled with the following technology.

### Client

The site utilizes the React for the base code. Use `components/Layout.js` as a starting point for  your site.

Styles can be used inline or within the SCSS file found under `src/assets/styles/global.scss`. The file is imported in `index.js`, if you wish to add more SCSS files, simply import them there.

Replace elements of `static/templates/` with files to your liking. Image imports can be done directly, webpack will handle the loading.

The site is bundled with several React packages for a quick development start. Material-UI is packaged for a styled 
component library, and framer-motion is included if animations are required.

## Quick Start

First, download the required npm packages.

```bash
npm install --legacy-peer-deps
```

Then, run the appropriate command for your purposes.

```bash
npm run [start / build]
```

When deploying to production, remember to add `.env` to your `.gitignore` and purge it from your repository.

### Deployment

On every push to main, a new branch will be created using GitHub actions, containing source code needed for a GitHub Pages deployment. To finish the setup, do the following:

1. Go to `Settings` in your repository.
2. Click `Pages` on the left menu.
3. Select the `gh-pages` branch from the dropdown. Leave `root` as `/`.
4. Your site will go live!

For additional configuration, you can add a custom domain and HTTPS support.

If you are looking for a full stack web application built on AWS and GitHub pages, see [here](https://github.com/mrrosoff/React-Lambda-Full-Stack).
