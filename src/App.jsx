import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  // State: holds the list of products fetched from the API
  const [products, setProducts] = useState([]);

  // State: manages loading indicator during data retrieval
  const [loading, setLoading] = useState(true);

  // State: stores error messages in case the fetch request fails
  const [error, setError] = useState(null);

  // Fetch product data on initial render
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Send request to local API (json-server)
        const response = await fetch("http://localhost:8000/products");

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

  // Component rendering
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Products Catalog</h1>

      {/* Conditional rendering for loading and error states */}
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}
      <ProductList products={products} />
    </div>
  );
};

export default App;
