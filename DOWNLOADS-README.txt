Project downloads are static ZIP files. Each file is named exactly after the project folder and contains the complete project folder with all HTML/CSS/JS/assets.

Download access:
- Users must be signed in with Firebase Authentication before a project ZIP can be downloaded.
- The portfolio checks the current Firebase account before starting the download.
- Firestore rules also require an authenticated user for the download record and project downloadCount update.
- After successful sign-in, the user is returned to the page they originally requested.
