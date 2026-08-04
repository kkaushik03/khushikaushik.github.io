# khushikaushik.github.io

Personal portfolio site for **Khushi Kaushik** — MS Computer Science student at UC San Diego, AI engineer and backend developer.

Live at [khushikaushik.com](https://khushikaushik.com).

## Contents

Single-page site with six snap-scroll sections: intro, about, projects, skills, experience, and contact.

- `index.html` — page markup and all styles
- `script.js` — cursor glow, typing animation, scroll reveal, navbar state, particles.js config
- `Khushi_Kaushik_Resume.pdf` — downloadable résumé linked from the hero
- `profile.jpg` — headshot shown in the About section

To change the headshot, replace `profile.jpg` with a new image using that exact filename. No code changes needed.

## Running locally

No build step — it's static HTML. Either open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

For live reload while editing, install the **Live Server** extension in VS Code, right-click `index.html`, and choose *Open with Live Server*.

## Updating content

Projects and experience live as `.project-card` and `.experience-card` blocks in `index.html`. Skills are `.skill-chip` spans in section 4. The rotating job titles in the hero come from the `roles` array at the top of `script.js`.
