# Student Portfolio

A React-based student portfolio developed as part of the Advanced Web Development Frameworks (ITUE301) practical coursework.

---

## Practical 1: Introduction to React and Component Architecture

### Objective
To set up a React development environment using Vite and build a static user interface using independently structured, reusable components.

### Components
- Header
- About
- Skills
- Projects
- Footer

### Concepts Demonstrated
- React functional components
- JSX
- Component composition
- Props
- Dynamic list rendering
- Reusable component architecture

### Technologies
- React
- Vite
- JavaScript
- CSS

### Run Locally
From the `frontend` directory:
```bash
npm install
npm run dev
```

---

## Practical 2: Routing and State Management

### Objective
To implement multi-page navigation using React Router and manage interactive UI using React state.

### Features
- Added React Router with three routes:
  - `/`
  - `/projects`
  - `/contact`
- Navigation bar with active route highlighting using `NavLink`
- Controlled contact form
- Live character counter
- Live message preview
- Dark/Light theme toggle
- Help-tip toggle
- Custom 404 page

### Concepts Demonstrated
- React Router
- `useState`
- Controlled components
- Conditional rendering
- Navigation without page reload

---

## Practical 3: API Integration and Data Rendering in React

### Objective
To consume the GitHub REST API and manage asynchronous data using loading, success, and error states.

### API Used
GitHub REST API

Endpoint:
```text
https://api.github.com/users/prachimehta07/repos
```

### Features
- Fetches live GitHub repositories
- Loading spinner while data is being retrieved
- Error message when the API request fails
- Retry button to fetch repositories again
- Repository search/filter
- Displays:
  - Repository name
  - Repository URL
  - Star count

### Concepts Demonstrated
- Fetch API
- `useEffect`
- `useState`
- Async/Await
- Loading state
- Error handling
- Conditional rendering
- Dynamic list rendering
- Component composition

### Components Added
- Spinner
- ErrorMessage
- RepoList
- RepoCard

### Testing
Verified the following scenarios:
- Successful API response
- Loading state using browser network throttling
- Error state by using an invalid API endpoint
- Retry functionality after failure
- Repository search filtering

### Technologies
- React
- Vite
- JavaScript (ES6+)
- CSS
- GitHub REST API


## Practical 6 — Full Stack Integration

- Tasks page (`/tasks`) connects to the Express + MongoDB backend (`task-manager-api-d25it121`)
- Central `services/api.js` handles all backend calls with one shared `BASE_URL`
- Optimistic UI update on task creation
- Confirmation dialog before delete
- Toast notifications for create/update/delete success and failure
- All data persists in MongoDB — confirmed via browser refresh

### Run Locally (both servers required)
Backend:
```bash
cd task-manager-api-d25it121
npm install
npm run dev
```
Frontend:
```bash
cd portfolio-d25it121/frontend
npm install
npm run dev
```
## Practical 7 — Frontend Authentication

- Added `/login` page supporting both login and registration
- Token stored in `localStorage`, attached to all task API calls
- 401 responses automatically clear the token and redirect to `/login`
- Logout button added to NavBar when a session is active

## Practical 8 — Lazy Loading and Code Splitting

### Objective
To improve frontend performance using route-based lazy loading and code splitting with `React.lazy()` and `Suspense`.

### Routes Lazy-Loaded
- `/projects`, `/contact`, `/tasks`, `/login`, `/*` (404)
- `/` (Home) stays eagerly loaded since it's the first route every visitor hits

### Fallback UI
- `PageLoader` component shown via `Suspense` while a route chunk loads
- 300ms minimum delay added so the fallback never flickers on fast connections

### Before / After (Network tab, gzip transfer size)

| Metric | Before | After |
|---|---|---|
| JS transferred on load | 77.6 kB | 75.5 kB (initial) + chunk on demand |
| Total requests | 4 | 6 (route chunks split out) |
| Route chunk loaded on-demand | — | `ProjectsPage.js`, `ErrorMessage.js` (only when `/projects` visited) |

Verified using Network tab throttled to Slow 3G — the `PageLoader` fallback is visibly shown while `/projects`'s chunk loads, before route content renders.

### Concepts Demonstrated
- `React.lazy()` and `Suspense`
- Route-based code splitting
- Fallback UI during chunk loading
- Network tab performance profiling