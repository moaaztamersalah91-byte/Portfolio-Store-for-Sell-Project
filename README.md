# M•PORTFOLIO — Visual Build v1

This version is intentionally frontend-only.

- No database
- No fake authentication
- No external project-data API
- Project count is derived from the local project list (`js/data.js`) so the UI is ready for a future data layer.
- Dark/light mode uses a full-screen curtain transition.
- Arabic/English switches the complete interface and RTL/LTR direction.
- Home, Projects, About, Contact, Project Details and Admin shell are included.
- Personal image and channel image supplied by the owner are included locally.

Before launch, replace the placeholder YouTube/Facebook URLs in `js/data.js` with the real links.


## Current build status
- Frontend-only build; no Firebase, database, authentication, or backend code is included.
- Visual system uses olive, white, and black as the primary palette.
- Home has a cinematic gaming-inspired entrance loader and animated theme curtain.
- Project covers are local assets; images are converted to WebP where applicable.


FINAL AUDIT NOTES
- Project download counters are stored in Firestore projects/{projectId}.downloadCount and the dashboard total is derived from those counters.
- Download event logging and counter increment are atomic.
- Restaurant menu/order pages are local/static and do not depend on Firebase.
