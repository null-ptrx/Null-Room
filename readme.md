Part A: Server foundation

Step 1: Express + TypeScript setup

Use: express, typescript, tsx, nodemon, dotenv, cors
Do: Create server/, add tsconfig.json, app.ts, server.ts and a /api/health route.
Done when: npm run dev works and /api/health returns JSON.

Step 2: MongoDB connection

Use: mongoose, a .env with MONGO_URI
Do: Write a typed connectDB() in config/db.ts and call it before listen.
Done when: The console shows “MongoDB connected”.

Step 3: Error handling and validation

Use: zod, a custom AppError class
Do: Add an async handler wrapper, a global error middleware and a validate(schema) middleware.
Done when: A bad request body returns a clean 400 JSON error.
Part B: Auth

Step 4: User model and register/login

Use: Mongoose model with an IUser interface, bcrypt
Do: Build User (name, email, passwordHash), plus POST /api/auth/register and /login.
Done when: You can register and log in from Postman, and passwords are hashed in the DB.

Step 5: JWT access and refresh tokens

Use: jsonwebtoken, cookie-parser, httpOnly cookie for the refresh token
Do: Issue both tokens on login, then add POST /api/auth/refresh and /logout.
Done when: An expired access token can be refreshed without logging in again.

Step 6: Auth middleware with typed req.user

Use: A types/express.d.ts declaration file
Do: Write requireAuth to verify the token and attach req.user, then add GET /api/auth/me.
Done when: /me returns the user with a token and 401 without one.
Part C: Rooms and chat

Step 7: Room model and routes

Use: Mongoose, nanoid for invite codes
Do: Build Room { name, owner, members[{user, role}], inviteCode } and the routes: create, join by code, get one, list mine.
Done when: Two users can be in the same room via an invite code.

Step 8: Socket.IO server with auth

Use: socket.io, JWT check in io.use()
Do: Authenticate the handshake, handle room:join and room:leave, and track who’s online.
Done when: Two clients see each other’s presence events.

Step 9: Chat backend

Use: Message model, typed Socket.IO events (ServerToClientEvents / ClientToServerEvents interfaces)
Do: Handle chat:send, check the sender is a room member, save the message and broadcast it. Add GET /api/rooms/:id/messages.
Done when: Messages persist and reach everyone in the room instantly.
Part D: Client foundation

Step 10: React + TS setup

Use: Vite (react-ts template), Tailwind, react-router-dom, axios
Do: Move your finished homepage in, set up routes (/, /login, /signup, /dashboard, /room/:id) and proxy /api to the server in dev.
Done when: All routes render and the homepage looks the same as before.

Step 11: AuthContext and API layer

Use: Context API, an axios instance with interceptors, a ProtectedRoute component
Do: Store the access token in memory, auto-refresh on 401, and load the user on app start.
Done when: A page refresh keeps you logged in.

Step 12: Login and Signup pages

Use: Controlled forms, typed form state
Do: Wire both forms to the backend, show errors and redirect to the dashboard.
Done when: You can sign up, log out, and log back in from the UI.

Step 13: Dashboard

Use: useEffect, typed API calls
Do: Build the Create Room form, the Join by Code form, and a list of your rooms.
Done when: Creating or joining a room takes you to /room/:id.

Step 14: Room page with live chat

Use: socket.io-client, a useSocket hook, a RoomContext
Do: Build the layout (sidebar members, main area, chat panel), load history, then append live messages.
Done when: Two browsers chat in real time and the online list updates.
Part E: Code editor and collaboration

Step 15: Solo Monaco editor

Use: @monaco-editor/react
Do: Build a CodeWindow component with a language dropdown and a theme matching your dark style.
Done when: You can type code with syntax highlighting.

Step 16: Yjs server

Use: ws, yjs, y-protocols, lib0, run as yjs-server/ or inside the same Node process
Do: Build a WebSocket server where each doc name is a room, and check the JWT on connection.
Done when: Two clients connecting to the same doc name stay in sync.

Step 17: Bind Monaco to Yjs

Use: yjs, y-websocket, y-monaco
Do: Create one Y.Doc per student’s code window and use the doc name room:{roomId}:window:{ownerId}.
Done when: Two tabs editing the same window sync live.

Step 18: Personal windows and view mode

Use: CodeWindow model (roomId, ownerId, language), Monaco readOnly
Do: Add a member list in the room, and clicking a member opens their window as read-only.
Done when: You can watch a friend type in real time.

Step 19: Permissions, enforced on the server

Use: A permissions field on CodeWindow: { user, level: 'view' | 'edit' | 'collaborate' }
Do: Build an owner panel to grant or revoke access. In the Yjs server, look up the user’s level on connect and drop incoming update messages from view users. Don’t rely on readOnly in the UI alone.
Done when: A modified client can’t write to a view-only window.

Step 20: Awareness (live cursors)

Use: Yjs awareness API, y-monaco cursor decorations
Do: Show each member’s name and color on their cursor and selection.
Done when: You can see who is typing where.

Step 21: Collaborative project mode

Use: Project model (roomId, leader, members), a Y.Map of files
Do: Build a file tree (create, rename, delete) where each file is its own Y.Doc, and let the leader add members.
Done when: Three people edit different files of one project at once.
Part F: Voice and video

Step 22: LiveKit integration

Use: livekit-server-sdk (token endpoint), @livekit/components-react
Do: Add POST /api/rooms/:id/video-token that checks membership, then build a video grid with mute, camera and screen share.
Done when: Two people talk on video inside a room.
Part G: Polish and deploy

Step 23: Room management

Do: Kick member, regenerate or expire the invite code, delete room, and add loading and error states everywhere.

Step 24: Rate limiting and security

Use: express-rate-limit, helmet
Do: Limit auth routes and chat sends, and restrict CORS to your client origin.

Step 25: Docker

Use: Dockerfiles for server and client (Nginx), plus docker-compose.yml with mongo
Done when: docker compose up brings up the whole app.

Step 26: Deploy

Use: MongoDB Atlas, Render or Railway for the server and Yjs server, Vercel for the client, LiveKit Cloud
Done when: Friends can join a room from a public link.