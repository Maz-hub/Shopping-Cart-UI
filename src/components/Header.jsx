import { useState } from "react";

// Import shopping cart icon from React Icons library
import { FaShoppingCart } from "react-icons/fa";

// Import custom hook to access the CartContext
import { useCart } from "../context/CartContext";

/**
 * Header component
 * Displays brand title, cart icon with badge, and a dropdown summary.
 */
const Header = () => {
  /** @state Controls visibility of the cart dropdown. */
  const [showDropdown, setShowDropdown] = useState(false);

  /** @context Retrieve cart state from CartContext. */
  const { cart } = useCart();

  /**
   * Compute total number of items in the cart.
   * Uses Array.reduce() to sum the 'qty' field of each cart item.
   */
  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);

  /**
   * Cart subtotal.
   * Multiplies price * qty per line and sums; formatted to 2 decimals.
   */
  const totalCount = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <header className="bg-white shadow-xl/20 p-4 flex justify-between items-center">
      {/* Brand title */}
      <h1 className="text-2xl font-bold text-blue-700">RunLab</h1>

      {/* Cart icon container */}
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="cursor-pointer"
        >
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
        </button>
        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-80 bg-white border border-blue-950 rounded shadow lg z-50">
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm">Your cart is empty</p>
              ) : (
                <>
                  {/* Scrollable list of lines */}
                  <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center py-2"
                      >
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            {item.qty} x ${item.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Subtotal */}
                  <div className="mt-4 flex justify-between font-semibold">
                    <span>Total: </span>
                    <span>${totalCount}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
