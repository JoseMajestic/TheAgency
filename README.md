# The Agency – Detective Operations Site

This project is a single-page marketing site for **The Agency**, a boutique detective and intelligence firm. It delivers a clean brief, showcases service pillars, and gives prospects a direct way to request a confidential engagement.

## Stack and structure
- **Bootstrap 5 (CDN)** for the responsive grid, spacing utilities, and components.
- **Custom CSS** (`css/styles.css`) for the detective branding, timeline, cookie modal, and footer polish.
- **Vanilla JS** (`js/app.js`) to handle the cookie consent modal and banner interactions (localStorage-based). The same file is the place to extend validation logic for the contact CTA/form when needed.
- **Assets** live under `assets/` (logo, branding, favicons, fonts). A Cinzel-inspired WOFF2 file sits in `assets/fonts/` and is loaded via `@font-face` for hero/headline typography.

## Running the site
1. Clone or download this folder.
2. Open `index.html` in any modern browser (no build tooling required).
3. Ensure the relative folders remain intact: `css/`, `js/`, `assets/`.

## Cookie & form JS
- On page load the script reads `localStorage` to decide whether to show the banner/modal.
- Users can open the full policy (“aquí”), accept, or reject. Responses are stored so the banner stays hidden afterward.
- The same module exposes a place to hook in basic contact validation (e.g., `#contactForm` submit listeners) if/when a full form is introduced.

## Contact
CTA buttons link to `#contacto`, which summarizes how to reach The Agency’s coordination desk 24/7. Update phone/email copy as operations expand.
