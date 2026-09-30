# Firebase setup — M Portfolio

## Already configured in this bundle
- Firebase Authentication: Google + Email/Password
- Firestore client connection
- Firestore security rules
- Admin-only Dashboard route
- User profiles
- Messages + admin replies
- Notifications
- Wishlist
- Ratings
- Download counters
- 15-project Firestore seed from the Admin Dashboard
- No Firebase Storage dependency

## First admin setup
1. Open the portfolio and create/sign in to your intended admin account.
2. In Firebase Console → Authentication → Users, copy that user's UID.
3. In Firestore create a collection named `admins`.
4. Create a document whose **Document ID is exactly the admin UID**.
5. Add:
   - `role` = `admin`
   - `email` = the admin email (optional, informational)
   - `createdAt` = timestamp
6. Open `Dashboard` from the navbar. The account is now authorized.
7. Click `Initialize 15 projects` once. This creates the initial project documents and starts the live project/download counters.

## Important
- Never store passwords in Firestore.
- Never upload a service-account JSON or private key to this site.
- Firebase Storage is intentionally not used in this version.
- Project ZIP files remain local in `downloads/` so the existing free-download flow stays intact.
- Project covers remain local assets.

## Firestore rules
Publish `firestore.rules` in Firebase Console → Firestore Database → Rules.
