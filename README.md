## 🛠️ Current Progress

The project is currently set up with a functional React front end and a local JSON Server API for product data.  
The goal is to build a complete shopping cart UI from scratch while following a guided learning process.

### Implemented Features

- **Project setup** using Vite and React.  
- **Data fetching** with the Fetch API inside a `useEffect` hook to retrieve product information from a mock backend (`json-server`).  
- **State management** implemented with `useState` for `products`, `loading`, and `error` states.  
- **Error handling** using a `try...catch` block, with visual feedback for loading and failed requests.  
- **Responsive product grid** built with Tailwind CSS utility classes.  
- **Dynamic rendering** of product cards displaying image, name, description, and price.  
- **Clean component structure** with clear separation of logic (data fetching) and presentation (UI).  

### Technical Stack

- **React 18** — for building the user interface  
- **Vite** — for fast development environment and build optimization  
- **Tailwind CSS v4** — for styling and responsive layout  
- **JSON Server** — for simulating a REST API locally  

---

> _This stage focuses on setting up a solid foundation: fetching and displaying products, managing states, and ensuring the UI adapts well across devices. The next phase will involve implementing cart logic, interactivity, and state persistence._
