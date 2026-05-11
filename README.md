# Contact Book

**Live site:** https://jesskg.github.io/Contact-book-JG/

---

## What this is

A browser-based contact management app - built during my time at the **FNB App Academy** in 2025.

You can add, view, edit, and delete contacts. Each contact stores a first name, last name, mobile number, email, and an optional profile photo. Everything is saved in your browser's `localStorage` so your contacts persist between sessions.

---

## Features

- Add new contacts with a profile photo
- View all contacts in a list
- Click any contact to view their full details
- Edit contact information
- Delete contacts
- Photos stored as base64 in localStorage - no server needed

---

## The original vs now

The original version of this project was built against a live backend API provided by the ITVarsity programme at FNB. It required a personal API key (a student email), made `fetch()` calls to a remote server for all CRUD operations, and wouldn't work for anyone without access to that API.

For this GitHub Pages version, the backend has been replaced with `localStorage` - so the app is fully self-contained and works in any browser without any setup. The logic is identical; only where the data lives has changed.

This was a significant step up from my first projects - it introduced me to:

- JavaScript `fetch()` and working with APIs
- Handling async operations with `.then()`
- `FormData` for file uploads
- Reading URL parameters to pass data between pages
- CRUD operations (Create, Read, Update, Delete)
- `localStorage` for client-side data persistence

---

## How to use

1. Visit the live site
2. Click **Add Contact** to create your first contact
3. Fill in the details and optionally upload a photo
4. Click any contact in the list to view, edit, or delete it

---

## Built with

- HTML
- JavaScript (vanilla)
- localStorage (browser storage)

No frameworks. No libraries. No backend.

---

## Part of the FNB App Academy

The FNB App Academy is a graduate programme run by First National Bank for emerging digital talent. This project was built as part of that programme - one of my first times working with APIs, async JavaScript, and multi-page application logic.

---

*Jesse Gitau · [GitHub](https://github.com/Jesskg) · [Portfolio](https://jkgsolutions.co.za)*
