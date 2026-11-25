# Prince Gupt Portfolio

Source repository: [prince-dev](https://github.com/princegupt1234/prince-dev).

A responsive personal portfolio built with HTML, CSS, Bootstrap, and a small amount of vanilla JavaScript.

## Features

- Light and dark themes
- Responsive navigation and layouts
- Rotating terminal commands and outputs with reduced-motion support
- Java and Spring Boot code-editor hero illustration
- About, skills, projects, training, education, and certifications
- Certificate scans with responsive previews; select a scan to open it full-size
- Downloadable resume
- Contact form handled by Web3Forms

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
| `script.js` | Theme toggle, mobile navigation, terminal typewriter, scroll effects, and contact form behavior |
| `Prince-Gupt-Resume.pdf` | Downloadable resume |
| `porfolio.png` | Portfolio project screenshot |
| `ecommerce.png` | Viastastore project screenshot |
| `RouteX.png` | RouteX project screenshot |
| `certificates/java-spring-boot.jpg` | Java and Spring Boot training certificate image |
| `certificates/ibm-sql-databases.png` | Cognitive Class SQL and Relational Databases certificate |
| `certificates/java-programming.png` | CodeHelp Basics of Java Programming certificate |

## Run locally

There is no build step or package installation.

1. Open `index.html` in a browser, or start a local static server from this folder:

   ```powershell
   python -m http.server 8000
   ```

2. Visit `http://localhost:8000`.

## Contact form

The form submits to Web3Forms. This static site does not include a custom application backend.

## Publish with GitHub Pages

This site is static and needs no build command.

1. In the `prince-dev` repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
3. Wait for the Pages deployment to finish. GitHub will show the published URL in the Pages settings.

The expected GitHub Pages URL is `https://princegupt1234.github.io/prince-dev/`. The page uses relative paths for its CSS, JavaScript, resume, project screenshots, and certificate scans. Use the hosted HTTPS URL when testing contact-form submissions.
