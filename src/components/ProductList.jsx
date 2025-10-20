import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <>
      {/* Product grid layout with responsive breakpoints */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
