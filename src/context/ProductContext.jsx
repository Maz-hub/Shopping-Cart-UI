import { createContext, useState, useEffect, useContext } from "react";

/**
 * ProductContext
 * Provides global access to product-related state and data-fetching logic.
 */
export const ProductContext = createContext();

/**
 * ProductProvider component
 * Wraps the application and exposes product data, loading, and error states
 * to all nested components through React Context.
 */
export function ProductProvider({ children }) {
  /** @state Holds the list of products fetched from the API. */
  const [products, setProducts] = useState([]);

  /** @state Indicates loading status during asynchronous data fetch. */
  const [loading, setLoading] = useState(true);

  /** @state Stores any error message from failed network requests. */
  const [error, setError] = useState(null);

  /**
   * Fetch product data from the local API once on initial render.
   * Uses the Vite proxy configuration to route requests to json-server.
   */

  // Fetch product data on initial render
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Send request to local API (json-server)
        const response = await fetch("/api/products");

        // Handle unsuccessful HTTP responses
        if (!response.ok) throw new Error("Failed to fetch products");

        // Parse the JSON response
        const data = await response.json();

        // Update state with fetched data
        setProducts(data);
      } catch (err) {
        // Capture and store any fetch or parsing errors
        setError(err.message);
      } finally {
        // Stop loading indicator once the process completes
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once

  /**
   * Provides product data and state management to child components.
   * Any component wrapped by ProductProvider can access these values
   * using the useContext(ProductContext) hook.
   */

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

/**
 * Custom hook: useProducts
 * Simplifies access to the ProductContext.
 * Enables components to consume product-related data
 * without importing both useContext and ProductContext explicitly.
 *
 * Example:
 * const { products, loading, error } = useProducts();
 */

export function useProducts() {
  return useContext(ProductContext);
}
