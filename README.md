# The Trinket Path: NYC Edition

Welcome to **The Trinket Path**, this is an interactive guide to some of New York City's coziest cafés, charming trinket shops, and inspiring art galleries.

Created for fellow explorers and collectors, this project combines my love for hidden gems, stationery stores, and beautiful spaces into one scrapbook-inspired digital experience.

The Trinket Path: NYC Edition was developed as my term project for CS601: Web Application Development at Boston University MET College.

## **Live Site**

* [The Trinket Path](https://the-trinket-path.netlify.app/)
---

## About the Project

The Trinket Path: NYC Edition is a curated guide designed to help users discover unique places throughout New York City.

As someone who enjoys visiting cafés, collecting stationery, and exploring art spaces, I wanted to create a project that combines those interests into one interactive website.

Users can browse through three different paths:

* Cafés
* Trinket Shops
* Galleries

Each destination includes descriptions, location information, images, and external links for further exploration.

---

## Features

### Home Page

* Illustrated landing page
* Sticky navigation bar
* Responsive design for desktop and mobile

### About Section

* Introduction to the project and creator
* Profile illustration
* "Pick Your Path" section

### Path Pages

* Cafés
* Trinket Shops
* Galleries

Each page contains:

* Responsive gallery layout
* Mobile carousel with scrollbar
* Modal popups with additional information
* Neighborhood and address information
* Price range and admission information (most are free to see!)
* External website and Instagram links

### Contact Page

Visitors can submit recommendations and hidden gems through a contact form powered by Web3Forms.

### Mobile Experience

* Responsive layouts
* Horizontal card carousels
* Mobile navigation menu
* Mobile-friendly modals
* Optimized typography and images

---

## Built With

### Frontend

* React
* TypeScript
* Vite
* React Router DOM

### Styling

* CSS
* CSS Grid
* Flexbox
* Responsive Design

### Fonts Used

* Clicker Script
* Jersey 25
* Alice

### Form Handling

* Web3Forms

### Design & Development Tools

* **Figma** — used to wireframe the initial layouts and plan the user experience
* **Canva** — used to create custom backgrounds and visual assets throughout the site
* **Claude AI** — used to assist with debugging and troubleshooting during development
---

## Project Structure

```text
src
│
├── assets
│   ├── backgrounds
│   ├── cards
│   ├── cafes
│   ├── galleries
│   ├── trinkets
│   ├── logo.svg
│   └── profile.svg
│
├── components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── MapView.tsx
│
├── data
│   ├── cafes.json
│   ├── galleries.json
│   └── trinkets.json
│
├── pages
│   ├── About.tsx
│   ├── Cafes.tsx
│   ├── Contact.tsx
│   ├── Galleries.tsx
│   ├── Home.tsx
│   └── Trinkets.tsx
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

---

## Getting the Repo Started

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Future Improvements
* Including a filtering feature
* Adding a dark mode 
* Including more locations (cafés, trinket shops, and galleries)

---

## Author

**Denisse Benito Gutierrez**
