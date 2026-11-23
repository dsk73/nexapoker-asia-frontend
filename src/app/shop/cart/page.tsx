
"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { useCart } from "@/context/CartContext";
import api from "@/lib/api";

import CartContent from "@/components/shop/checkout/CartContent";
import CheckoutConfirmation from "@/components/shop/checkout/CheckoutConfirmation";
import CheckoutForm, {
  type CustomerDetails,
} from "@/components/shop/checkout/CheckoutForm";
import OrderSuccess, {
  type OrderResponse,
} from "@/components/shop/checkout/OrderSuccess";

type CheckoutStage = "confirmation" | "details" | "success";

const INITIAL_CUSTOMER: CustomerDetails = {
  customerName: "",
  email: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  address: "",
  postalCode: "",
  customerNotes: "",
};

const TELEGRAM_SUPPORT_LINK = "https://t.me/khatra17";

export default function CartPage() {
  const {
    items,
    cartCount,
    subtotal,
    isLoaded,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  // Checkout State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStage, setCheckoutStage] =
    useState<CheckoutStage>("confirmation");

  // Customer Details
  const [customer, setCustomer] =
    useState<CustomerDetails>(INITIAL_CUSTOMER);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Prevent rapid duplicate submissions before React updates state
  const submissionLock = useRef(false);

  // Order State
  const [order, setOrder] = useState<OrderResponse | null>(null);
  const [idempotencyKey, setIdempotencyKey] = useState("");

  // Currency
  const currency = items[0]?.currency || "USD";

  const formatPrice = (
    price: number,
    currencyCode = currency
  ) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(price);
  };

  // Open Checkout
  const openCheckout = () => {
    setErrorMessage("");
    setOrder(null);
    setCustomer(INITIAL_CUSTOMER);
    setIdempotencyKey("");
    setCheckoutStage("confirmation");
    setIsCheckoutOpen(true);
  };

  // Close Checkout
  // Cart items are intentionally preserved.
  const closeCheckout = () => {
    if (submissionLock.current || isSubmitting) return;

    setIsCheckoutOpen(false);
    setErrorMessage("");
  };

  // Update Customer Details
  const updateCustomer = (
    field: keyof CustomerDetails,
    value: string
  ) => {
    setCustomer((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrorMessage("");
  };

  // Submit Order
  const submitOrder = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Synchronous protection against rapid duplicate submissions
    if (submissionLock.current || isSubmitting) return;

    // Validate Cart
    if (items.length === 0) {
      setErrorMessage(
        "Your cart is empty. Please add products before checkout."
      );
      return;
    }

    // Validate Product and Variant References
    const invalidItem = items.find(
      (item) =>
        !item.productId ||
        !item.variantId ||
        /^\d+$/.test(item.productId) ||
        /^\d+$/.test(item.variantId)
    );

    if (invalidItem) {
      setErrorMessage(
        "A product or variant reference is missing. Please remove the affected item and add it to your cart again."
      );
      return;
    }

    // Lock immediately before starting the request
    submissionLock.current = true;
    setIsSubmitting(true);
    setErrorMessage("");

    // Generate or Reuse Idempotency Key
    const requestKey =
      idempotencyKey || `nexa-order-${crypto.randomUUID()}`;

    if (!idempotencyKey) {
      setIdempotencyKey(requestKey);
    }

    try {
      // Send Order Request to Strapi
      const response = await api.post<{
        success: boolean;
        data?: OrderResponse;
        error?: {
          message?: string;
        };
      }>("/shop-orders/request", {
        customer: {
          customerName: customer.customerName.trim(),
          email: customer.email.trim(),
          phone: customer.phone.trim(),
          country: customer.country.trim(),
          state: customer.state.trim(),
          city: customer.city.trim(),
          address: customer.address.trim(),
          postalCode: customer.postalCode.trim(),
          customerNotes: customer.customerNotes.trim(),
        },

        items: items.map((item) => ({
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity,
        })),

        idempotencyKey: requestKey,
      });

      // Validate API Response
      const orderData = response.data?.data;

      if (
        response.data?.success !== true ||
        !orderData?.orderNumber
      ) {
        throw new Error(
          "We could not confirm your order. Please try again."
        );
      }

      // Save Order and Show Success Screen
      setOrder(orderData);
      setCheckoutStage("success");

      // Clear Cart Only After Successful Order Creation
      clearCart();
    } catch (error: unknown) {
      let message = "Unable to submit your order. Please try again.";

      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error
      ) {
        const responseError = error as {
          response?: {
            data?: {
              error?: {
                message?: string;
              };
            };
          };
        };

        message =
          responseError.response?.data?.error?.message || message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
      submissionLock.current = false;
    }
  };

  // Loading State
  if (!isLoaded) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center bg-[#050507] pt-28">
          <p className="text-sm text-white/50">
            Loading your cart...
          </p>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Cart Content */}
      <CartContent
        items={items}
        cartCount={cartCount}
        subtotal={subtotal}
        formatPrice={formatPrice}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        onCheckout={openCheckout}
      />

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-sm"
          // Intentionally no backdrop onClick handler.
          // Clicking outside the card must not close checkout.
        >
          <div className="relative my-auto w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b0c10] p-6 shadow-2xl sm:p-8">
            {/* Close Button */}
            {checkoutStage !== "success" && (
              <button
                type="button"
                onClick={closeCheckout}
                disabled={isSubmitting}
                aria-label="Close checkout"
                className="absolute right-5 top-5 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30"
              >
                <X size={20} />
              </button>
            )}

            {/* Stage 1: Checkout Confirmation */}
            {checkoutStage === "confirmation" && (
              <CheckoutConfirmation
                onBack={closeCheckout}
                onContinue={() => setCheckoutStage("details")}
              />
            )}

            {/* Stage 2: Customer Details Form */}
            {checkoutStage === "details" && (
              <CheckoutForm
                customer={customer}
                updateCustomer={updateCustomer}
                onSubmit={submitOrder}
                onBack={() => {
                  setErrorMessage("");
                  setCheckoutStage("confirmation");
                }}
                isSubmitting={isSubmitting}
                errorMessage={errorMessage}
                cartCount={cartCount}
                subtotal={subtotal}
                formatPrice={formatPrice}
              />
            )}

            {/* Stage 3: Order Success */}
            {checkoutStage === "success" && order && (
              <OrderSuccess
                order={order}
                formatPrice={formatPrice}
                supportLink={TELEGRAM_SUPPORT_LINK}
                onClose={() => {
                  setIsCheckoutOpen(false);
                  setCheckoutStage("confirmation");
                  setCustomer(INITIAL_CUSTOMER);
                  setOrder(null);
                  setIdempotencyKey("");
                }}
              />
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
