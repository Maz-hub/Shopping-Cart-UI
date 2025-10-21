## 🛍️ Shopping Cart UI — RunLab

A responsive **React shopping cart interface** for a mock sneaker store called **RunLab**.
This project demonstrates structured React component design, context-based state management, and data persistence using `localStorage`.

---

## 🚀 Overview

The project is a full-featured **shopping cart UI** connected to a mock API (`json-server`).  
Users can browse running shoes, add them to the cart, view a live dropdown summary, remove specific items, or clear the entire cart — with cart data persisting across page reloads.

---

## ✨ Implemented Features

### 🧩 Core Features
- **React + Vite Setup** — optimized modern development environment.  
- **Product fetching** via the Fetch API inside a `useEffect` hook.  
- **Local JSON Server API** serving product data dynamically.  
- **State management** for products, loading, and errors using `useState`.  
- **Global state handling** for cart items with **Context API + custom hooks**.  
- **Persistent cart state** stored in `localStorage` for session continuity.

### 🛒 Cart Functionality
- **Add to Cart** — adds items or increments quantity if already present.  
- **Remove from Cart** — deletes individual items via context action.  
- **Clear Cart** — resets all cart contents with a single click.  
- **Cart Dropdown UI** — toggleable cart summary showing:  
  - item name, quantity, and line total  
  - running subtotal of all items  
  - "Clear Cart" button  
- **Cart badge indicator** — dynamically displays total number of items.

### 🎨 User Interface
- **Responsive layout** using Tailwind CSS v4 utility classes.  
- **Accessible UI patterns** with keyboard-friendly buttons and visual feedback.  
- **Iconography** using `react-icons` (`FaShoppingCart`).  
- **Clean component structure** with clear separation of logic and presentation.

---

## 🧠 Technical Stack

| Tool / Library | Purpose |
|----------------|----------|
| **React 18** | Component-based UI development |
| **Vite** | Fast build and dev environment |
| **Tailwind CSS v4** | Utility-first styling framework |
| **JSON Server** | Local REST API for product data |
| **React Context API** | Global state management for cart |
| **localStorage** | Data persistence across sessions |
| **React Icons** | Vector icons for UI consistency |

---

## 🧾 Key Learnings

- Using **Context API** to replace prop drilling.  
- Creating **custom hooks** for cleaner data access (`useProducts`, `useCart`).  
- Managing **immutable updates** to state (e.g., `.map()` and `.filter()`).  
- Handling **side effects** like fetching data and persisting to storage.  
- Structuring a scalable React project with **modular components**.  


---

## 🙏 Acknowledgments

This project was created as part of a guided learning by  
[@bradtraversy](https://github.com/bradtraversy)’s *Modern React from the Beginning* course.  


