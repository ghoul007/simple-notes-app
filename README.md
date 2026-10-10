# Simple Notes App

Set up a minimal, runnable web app in this repository for Simple Notes App.

Acceptance criteria:
- The repo includes a homepage that loads in a browser for Simple Notes App.
- A newcomer can start the app with the documented command(s).
- The homepage identifies the product as Simple Notes App.
- The scaffold is committed and ready for follow-up tickets.

## Run locally

```bash
npm start
```

This runs `npx --yes serve -l 4173 .`. Open http://localhost:4173 in your browser.

## Pages

- Homepage: `/` (`index.html`) — add, list, and delete notes saved in localStorage.
- About: `/about.html` — explains what the app does.

The app is plain HTML, CSS, and JavaScript with no build step or dependencies.
