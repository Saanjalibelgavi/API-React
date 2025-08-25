// src/pages/Checkout.tsx
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Clear the cart after placing order
    clearCart();
    // Redirect to Thank You page
    navigate("/thank-you");
  };

  return (
    <div className="max-w-lg mx-auto mt-20 bg-white p-8 shadow-lg rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-4">🛒 Checkout</h2>
      <p className="mb-6 text-gray-600">
        Ready to place your order?
      </p>
      <button
        onClick={handleCheckout}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
}
