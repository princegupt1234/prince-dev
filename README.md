# Prince Gupt Portfolio

A responsive personal portfolio built with HTML, CSS, Bootstrap, and a small amount of vanilla JavaScript.

## Features

- Light and dark themes
- Responsive navigation and layouts
- Rotating terminal commands and outputs with reduced-motion support
- About, skills, projects, training, education, and certifications
- Downloadable resume
- Contact form handled by FormSubmit

## Technologies

- HTML5 and CSS3
- Bootstrap 5 and Bootstrap Icons
- Vanilla JavaScript
- Google Fonts

Bootstrap, Bootstrap Icons, and Google Fonts load from CDNs, so an internet connection is needed for those assets.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Portfolio content and structure |
| `styles.css` | Themes, layout, and responsive styles |
| `script.js` | Theme toggle, mobile navigation, terminal typewriter, scroll effects, and form behavior |
| `Prince-Gupt-Resume.pdf` | Downloadable resume |
| `profile.png` | Profile photo used in the sidebar and hero |

## Run locally

There is no build step or package installation.

1. Open `index.html` in a browser, or start a local static server from this folder:

   ```powershell
   python -m http.server 8000
   ```

2. Visit `http://localhost:8000`.

## Contact form

The form submits to FormSubmit; there is no application backend in this project. Form submissions are processed by that service. If the delivery address or FormSubmit configuration changes, update the form action in `index.html` and complete any activation steps required by the service.

## Publish with GitHub Pages

This site is static and needs no build command.

1. Create a dedicated GitHub repository for the portfolio.
2. Upload the **contents** of this folder to the repository root. Keep `index.html`, `styles.css`, `script.js`, `profile.png`, and `Prince-Gupt-Resume.pdf` together at the top level; do not upload the parent folder itself.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` (or the repository's default branch) and `/(root)`, then save.
5. Wait for the Pages deployment to finish. GitHub will show the published URL in the Pages settings.

The page uses relative paths for its CSS, JavaScript, photo, and resume, so it works both at a user-site URL (`https://<username>.github.io/`) and a project-site URL (`https://<username>.github.io/<repository>/`). Use the hosted HTTPS URL when testing contact-form submissions.
