 Dev Stack Builder

Dev Stack Builder is an interactive web application designed for developers to explore modern frontend, backend, database, and DevOps technologies, compare them, and curate a customized development stack for their next project.

## 🚀 Technologies Used
- *React.js*
- *Tailwind CSS (v4)*
- *JavaScript (ES6+)*
- *React-Toastify*
- *Vite*

## ✨ Core Features
1. *Interactive Stack Builder*: Seamlessly add or remove technologies from your customized stack with single-addition constraints.
2. *Real-time Notifications*: Custom toast alerts notifying users on additions, duplicates, and removals using react-toastify.
3. *Fully Responsive & Modern UI*: Tailored layouts for Mobile, Tablet, and Desktop with a unified gradient theme.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
*Answer:* JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like elements directly inside JavaScript code. It makes writing React component structures easier, cleaner, and more readable.

### 2. What is the difference between props and state?
*Answer:* 
- *Props*: External data passed into a component from its parent. Props are read-only and immutable by the receiving component.
- *State*: Internal data managed directly within a component. State can change over time based on user interactions.

### 3. What does the useState hook do, and where did you use it in this project?
*Answer:* useState is a React hook that lets components store and track dynamic data. In this project, I used useState in App.jsx to store the loaded technologies array and the selected stack list, and in Navbar.jsx to toggle the mobile menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
*Answer:* useEffect handles side effects in React, such as fetching data or setting up timers. I used it to fetch the technologies.json file once when the application component mounts on the screen.

### 5. Why does every item in a .map() list need a unique key prop?
*Answer:* The key prop helps React identify which items have changed, been added, or removed. It optimizes performance during re-rendering by updating only the changed DOM elements.

### 6. What is conditional rendering? Show one place you used it.
*Answer:* Conditional rendering means displaying different UI components or elements based on specific logical conditions. I used conditional rendering in Sidebar.jsx to show an empty message when stack.length === 0, and the list of items when technologies are selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
*Answer:* Data is passed from parent to child via *props*. A child sends data back to the parent by triggering a *callback function* that was passed to it as a prop by the parent.
