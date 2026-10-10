# Simple Notes App

Add an About/explain screen for Simple Notes App that presents the user's description of the app.

User's app description:
A lightweight notes application with note creation, list view, and an About screen that explains the app: capture notes, browse them, and understand why it exists.

Acceptance criteria:
- There is a dedicated About (or equivalent) screen reachable from the homepage.
- The screen presents the user's description of Simple Notes App without omitting it.
- A visitor can understand what Simple Notes App is for from this screen alone.

## Run locally

```bash
npm start
```

This runs `npx --yes serve -l 4173 .`. Open http://localhost:4173 in your browser.

## Pages

- Homepage: `/` (`index.html`) — add, list, and delete notes saved in localStorage.
- About: `/about.html` — explains what the app does.

The app is plain HTML, CSS, and JavaScript with no build step or dependencies.
