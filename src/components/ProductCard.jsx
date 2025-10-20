// Import the custom hook that provides access to cart functions and state
import { useCart } from "../context/CartContext";

/**
 * ProductCard component
 * Displays individual product details and handles Add to Cart interaction.
 */
const ProductCard = ({ product }) => {
  /**
   * Destructure the addToCart function from the CartContext.
   * useCart() returns all values exposed by CartProvider,
   * allowing this component to call cart-related functions directly.
   */
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col">
      {/* Product image */}
      <img src={product.image} alt={product.name} className="rounded mb-4" />

      {/* Product name */}
      <h2 className="text-xl font-semibold">{product.name}</h2>

      {/* Product description */}
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>

      {/* Product price */}
      <p className="font-bold text-lg">${product.price.toFixed(2)}</p>

      {/* Add To Cart button */}
      <button
        /**
         * onClick handler triggers addToCart() when the user clicks the button.
         * The function is called with the current product as an argument.
         * The parentheses () are required to actually execute the function.
         * Without them, it would only reference the function, not run it.
         */
        onClick={() => addToCart(product)}
        className="bg-blue-900 text-white mt-3 py-2 px-4 rounded transition hover:bg-blue-950"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
