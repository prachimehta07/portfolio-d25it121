# Student Portfolio

A React-based student portfolio developed as part of the Advanced Web Development Frameworks (ITUE301) practical coursework.

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

## Technologies

- React
- Vite
- JavaScript
- CSS

## Run Locally

From the `frontend` directory:

```bash
npm install
npm run dev

## Practical 2 — Routing & State

- Added React Router v6 with 3 routes: `/`, `/projects`, `/contact`
- NavBar uses `NavLink` for active-route highlighting (no full page reload)
- Contact page: controlled input with live character count and preview
- `useState` used for dark/light mode toggle (App.jsx) and help-tip visibility (Contact.jsx)
- Added a 404 route for unmatched paths