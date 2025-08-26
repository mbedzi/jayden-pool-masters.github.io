Jayden Pool Masters – Static Website
===================================

A fast, responsive static website for Jayden Pool Masters. Built with plain HTML, CSS, and a touch of JS. Optimized for GitHub Pages hosting.

Local preview
-------------

Open `index.html` directly in your browser, or serve with a simple HTTP server for correct relative paths.

- Python 3: `python -m http.server 8080`
- Node.js: `npx serve .`

Deployment (GitHub Pages)
-------------------------

1. Create a new repository on GitHub, e.g., `jaydenpoolmasters`.
2. Push this project to the repository root.
3. In the repository, go to Settings → Pages:
   - Source: Deploy from a branch
   - Branch: `main` (or `master`), folder `/root`
4. Save. Your site will be available at `https://<username>.github.io/jaydenpoolmasters/`.

Notes
-----

- All links and assets use relative paths so the site works under the project subpath on GitHub Pages.
- Replace placeholder contact details in `contact.html` with your real phone, email, and WhatsApp.
- Add or remove images under `images/` and mirror filenames in `gallery.html` as needed.


