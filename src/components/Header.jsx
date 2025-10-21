// Import shopping cart icon from React Icons library
import { FaShoppingCart } from "react-icons/fa";

// Import custom hook to access the CartContext
import { useCart } from "../context/CartContext";

/**
 * Header component
 * Displays the brand title and a cart icon with an item count badge.
 */
const Header = () => {
  /** @context Retrieve cart state from CartContext. */
  const { cart } = useCart();

  /**
   * Compute total number of items in the cart.
   * Uses Array.reduce() to sum the 'qty' field of each cart item.
   */
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header className="bg-white shadow-xl/20 p-4 flex justify-between items-center">
      {/* Brand title */}
      <h1 className="text-2xl font-bold text-blue-700">RunLab</h1>

      {/* Cart icon container */}
      <div className="relative">
        {/* Shopping cart icon */}
        <FaShoppingCart className="text-3xl text-blue-950" />

        {/* Conditional rendering:
            If there are items in the cart (itemCount > 0),
            display a small circular badge showing the number of items. */}
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {itemCount}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
