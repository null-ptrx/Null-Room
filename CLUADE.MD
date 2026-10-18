# Null-Room

Real-time collaborative coding classroom. Users create or join rooms, talk over voice/video, chat, and write code in their own editors while others watch and help.

## Stack

- **Client:** React + Vite + TypeScript + Tailwind, Monaco Editor, Socket.IO client, Yjs (`y-websocket`, `y-monaco`)
- **Server:** Node + Express + TypeScript, Socket.IO, Mongoose (MongoDB), Zod, JWT + bcrypt
- **Realtime sync:** Yjs WebSocket server (one Y.Doc per member per room)
- **Voice/video:** LiveKit (hosted SFU), added late
- **Deploy:** Docker Compose; MongoDB Atlas, Render/Railway (server), Vercel (client)

## Repo layout

```
Null-Room/
├── client/
│   └── src/
│       ├── pages/        # Home, Login, Signup, Dashboard, Room
│       ├── components/   # Navbar, Editor, Chat, Participants, VideoPanel, PermissionPanel
│       ├── hooks/        # useSocket, useYjsDoc, useRoom
│       ├── context/      # AuthContext, RoomContext
│       └── lib/          # api.ts (axios), socket.ts
├── server/
│   └── src/
│       ├── config/       # db.ts
│       ├── models/       # User, Room, Message
│       ├── routes/       # auth, rooms
│       ├── controllers/
│       ├── middleware/   # auth, validate, errorHandler
│       ├── sockets/      # room, chat, roles
│       ├── app.ts        # Express app (no listen)
│       └── server.ts     # connects DB, then listens
└── CLAUDE.md
```

## App flow

1. Open app. If not logged in: sign up / log in (optional) or **continue as guest** (temporary identity).
2. Dashboard: Create Room, Join Room (code or link), Browse Public Rooms, Recent Rooms (logged-in only), Profile/Settings (logged-in only).
3. **Create room:** name, public/private, optional password (private), language/template, audio/video settings. Creator becomes **Owner (Sudo)**.
4. **Join room:** public rooms join directly; private rooms need the password. Everyone joins as **Null** by default.
5. **Inside the room:** participants list, personal code editor per member, audio/video panel, chat.

## Roles and permissions

| Role | Can do |
|------|--------|
| **Owner (Sudo)** | Everything: edit any window, promote/demote, mute/unmute, remove users, manage permissions, share link, delete/close room |
| **Sudo** | Edit any window, promote/demote, mute/unmute, remove users |
| **Null** (default) | Edit own window only, view all windows, chat, use audio if allowed, request sudo, leave room |

- Every member has their own editor (the owner too). Everyone sees the owner's window and their own by default, and any member can open any other window **view-only**.
- Guests and logged-in users are both Null by default.

### Server-side enforcement (critical)

Never rely on hiding UI. Check the role on the server every time:

- A Yjs write is accepted only if `senderId === docOwnerId` or the sender's role is `owner` or `sudo`. Drop all other updates.
- Every role/moderation socket event must verify the sender's role before acting.
- Only the Owner can manage permissions or delete the room.

## Realtime design

- **Yjs doc name:** `room:{roomId}:user:{userId}` (guests use `guestId`). Created when the member joins.
- **Socket.IO events** (type them with `ServerToClientEvents` / `ClientToServerEvents`):
  - `room:join`, `room:leave`, `room:presence`
  - `chat:send`, `chat:receive`
  - `role:request-sudo`, `role:promote`, `role:demote`
  - `user:mute`, `user:unmute`, `user:remove`

## Data models

- **User:** name, email, passwordHash, createdAt
- **Room:** name, owner, visibility (`public` | `private`), passwordHash?, language, inviteCode, members `[{ userId | guestId, name, role: 'owner' | 'sudo' | 'null' }]`
- **Message:** room, sender, text, createdAt

## Auth

- Access token (JWT, short-lived) + refresh token (httpOnly cookie).
- `POST /api/auth/guest` takes a display name and returns a short-lived guest token with a `guestId`.
- `requireAuth` attaches `req.user`, typed via `types/express.d.ts`. It accepts both user and guest tokens.

## Commands

```bash
# server
cd server && npm run dev      # nodemon + tsx
npm run build                 # tsc -> dist/
npm start                     # node dist/server.js

# client
cd client && npm run dev      # Vite on :5173
npx tsc -b                    # type check
```

## Conventions

- TypeScript `strict: true`. No `any`; use a real type or `unknown` and narrow.
- Server uses ESM (`"type": "module"`, `NodeNext`): relative imports need the `.js` extension, e.g. `import app from './app.js'`.
- Validate every request body with Zod via a `validate(schema)` middleware.
- Wrap async handlers, and send errors through one global error middleware (`AppError`).
- Keep `app.ts` (Express setup) separate from `server.ts` (DB connect + listen).
- Types shared by client and server (Role, Room, socket events) should live in one shared package so they can't drift.
- Dark terminal/hacker UI: near-black background, monospace font, neon cyan/purple accents, sharp corners.

## Git workflow

- **Never commit or push directly to `main`.**
- One feature branch per step or feature (`feat/auth`, `feat/rooms`, `feat/chat`), then merge through a pull request.
- Use conventional commit messages (`feat(server): ...`, `chore: ...`, `fix: ...`).

## Build order

1. Server setup (Express + TS) and MongoDB connection
2. Error handling + Zod validation
3. Auth: register/login, JWT + refresh, guest access, `requireAuth`
4. Rooms: models and routes, dashboard UI
5. Socket.IO with auth, presence
6. Chat
7. Monaco editor, then Yjs server and Monaco binding
8. View-only access to other members' windows
9. Server-side permission enforcement, role actions (promote, demote, mute, remove, request sudo)
10. Live cursors (Yjs awareness)
11. Voice/video (LiveKit)
12. Room management, rate limiting, helmet, Docker, deploy

## Current status

- Homepage UI done (client, being migrated from JS to TypeScript)
- Server folder created and being set up in TypeScript
- Update this section as steps are completed