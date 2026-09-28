# K.V.Divya Portfolio

A responsive React + Vite portfolio built with JavaScript and CSS.

## Run locally

```bash
npm install
npm run dev
```

For Windows PowerShell installations that block `npm.ps1`, run `npm.cmd install` and `npm.cmd run dev` instead.

## Update your details

- Add projects in `src/data/projects.js`. Leave URLs empty until the real repository or demo is available; add technologies only when confirmed.
- Add certificates in `src/data/certificates.js`. Set `certificateUrl` when the actual PDF or certificate page is ready.
- Update skill names and levels in `src/data/skills.js`.
- Replace the contact placeholders in `src/components/SocialLinks.jsx` and `src/components/Sections.jsx` when you want to publish real contact details.
- Put your resume at `public/resume.pdf`. The download button detects when the PDF is missing.
- To use a real profile photo, place it in `public/` and replace the placeholder markup in the `Hero` component in `src/components/Sections.jsx` with an `<img>` element and meaningful alt text.

The contact form is frontend-only and clearly reports that it does not send messages. Connect an email service or backend before using it to receive submissions.
