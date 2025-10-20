import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // State: holds the current list of products in the cart
  // Initially, it's an empty array because the cart starts empty
  const [cart, setCart] = useState([]);

  /**
   * Function: addToCart
   * Adds a product to the cart.
   * - If the product already exists, increase its quantity.
   * - If it's new, add it as a new item with qty = 1.
   */
  const addToCart = (product) => {
    // When updating state based on previous state,
    // always use the functional form of setCart to ensure React
    // uses the most up-to-date version of 'cart'
    setCart((prev) => {
      /**
       * 1️⃣ Check if the product already exists in the cart
       *    - .find() looks through the array and returns the first item
       *      that matches the condition.
       *    - Here, we compare item.id to product.id.
       */
      const existing = prev.find((item) => item.id === product.id);

      /**
       * 2️⃣ If the product is already in the cart:
       *    - We create a *new* array (because React state must stay immutable).
       *    - .map() loops through each item.
       *    - When the item’s id matches the product’s id,
       *      return a new object with the same data, but qty increased by 1.
       *    - For all other items, return them unchanged.
       */
      if (existing) {
        return prev.map(
          (item) =>
            item.id === product.id
              ? { ...item, qty: item.qty + 1 } // increment existing product qty
              : item // keep other products the same
        );
      }

      /**
       * 3️⃣ If the product was not found in the cart:
       *    - Add it as a new entry.
       *    - The spread operator ...prev keeps all current cart items.
       *    - Then append a *new* product object with an extra field qty: 1.
       */
      return [...prev, { ...product, qty: 1 }];
    });
  };
  /**
   * Provide cart state and actions to all components wrapped
   * inside the CartProvider.
   */
  return (
    <CartContext.Provider value={(cart, addToCart)}>
      {children}
    </CartContext.Provider>
  );
}

/* Custom hook: useCart */
export function useCart() {
  return useContext(CartContext);
}
