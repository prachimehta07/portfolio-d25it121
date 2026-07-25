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