import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductContext";

const ProductList = () => {
  const { products, loading, error } = useProducts();
  return (
    <>
      {/* Product grid layout with responsive breakpoints */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading && <p>Loading...</p>}
        {error && <div className="error">{error}</div>}

        {products.map((product) => (
          /**
           * Each ProductCard requires a unique 'key' prop to help React
           * identify which items have changed, been added, or removed.
           * Using 'product.id' ensures stable and predictable rendering.
           */
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
