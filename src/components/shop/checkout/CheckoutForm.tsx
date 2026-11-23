
"use client";

import { Loader2 } from "lucide-react";

export type CustomerDetails = {
  customerName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  address: string;
  postalCode: string;
  customerNotes: string;
};

type Props = {
  customer: CustomerDetails;
  updateCustomer: (field: keyof CustomerDetails, value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
  isSubmitting: boolean;
  errorMessage: string;
  cartCount: number;
  subtotal: number;
  formatPrice: (price: number) => string;
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#151519] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#ff1764]";

export default function CheckoutForm({
  customer,
  updateCustomer,
  onSubmit,
  onBack,
  isSubmitting,
  errorMessage,
  cartCount,
  subtotal,
  formatPrice,
}: Props) {
  return (
    <>
      {/* Heading */}
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff1764]">
        Checkout Details
      </p>

      <h2 className="mt-2 text-2xl font-black text-white">
        Your Information
      </h2>

      <p className="mt-2 text-sm leading-6 text-white/50">
        Enter your contact and delivery details so our team can process your
        order.
      </p>

      {/* Error Message */}
      {errorMessage && (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-300"
        >
          {errorMessage}
        </div>
      )}

      {/* Customer Details Form */}
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="customerName"
            className="mb-2 block text-xs font-semibold text-white/70"
          >
            Full Name *
          </label>

          <input
            id="customerName"
            name="customerName"
            type="text"
            autoComplete="name"
            required
            maxLength={150}
            value={customer.customerName}
            onChange={(e) =>
              updateCustomer("customerName", e.target.value)
            }
            placeholder="Enter your full name"
            className={inputClass}
          />
        </div>

        {/* Email and Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold text-white/70"
            >
              Email Address *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={150}
              value={customer.email}
              onChange={(e) =>
                updateCustomer("email", e.target.value)
              }
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-semibold text-white/70"
            >
              Phone Number *
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              maxLength={40}
              value={customer.phone}
              onChange={(e) =>
                updateCustomer("phone", e.target.value)
              }
              placeholder="+91 98765 43210"
              className={inputClass}
            />
          </div>
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-xs font-semibold text-white/70"
          >
            Country *
          </label>

          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            required
            maxLength={100}
            value={customer.country}
            onChange={(e) =>
              updateCustomer("country", e.target.value)
            }
            placeholder="Enter your country"
            className={inputClass}
          />
        </div>

        {/* State and City */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="state"
              className="mb-2 block text-xs font-semibold text-white/70"
            >
              State / Province *
            </label>

            <input
              id="state"
              name="state"
              type="text"
              autoComplete="address-level1"
              required
              maxLength={100}
              value={customer.state}
              onChange={(e) =>
                updateCustomer("state", e.target.value)
              }
              placeholder="Enter state"
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-xs font-semibold text-white/70"
            >
              City *
            </label>

            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              required
              maxLength={100}
              value={customer.city}
              onChange={(e) =>
                updateCustomer("city", e.target.value)
              }
              placeholder="Enter city"
              className={inputClass}
            />
          </div>
        </div>

        {/* Delivery Address */}
        <div>
          <label
            htmlFor="address"
            className="mb-2 block text-xs font-semibold text-white/70"
          >
            Complete Delivery Address *
          </label>

          <textarea
            id="address"
            name="address"
            autoComplete="street-address"
            required
            maxLength={500}
            rows={3}
            value={customer.address}
            onChange={(e) =>
              updateCustomer("address", e.target.value)
            }
            placeholder="House number, street, area, landmark..."
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* Postal Code */}
        <div>
          <label
            htmlFor="postalCode"
            className="mb-2 block text-xs font-semibold text-white/70"
          >
            Postal / ZIP Code *
          </label>

          <input
            id="postalCode"
            name="postalCode"
            type="text"
            autoComplete="postal-code"
            required
            maxLength={20}
            value={customer.postalCode}
            onChange={(e) =>
              updateCustomer("postalCode", e.target.value)
            }
            placeholder="Enter postal code"
            className={inputClass}
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label
            htmlFor="customerNotes"
            className="mb-2 block text-xs font-semibold text-white/70"
          >
            Additional Notes{" "}
            <span className="font-normal text-white/35">
              (Optional)
            </span>
          </label>

          <textarea
            id="customerNotes"
            name="customerNotes"
            rows={2}
            maxLength={1000}
            value={customer.customerNotes}
            onChange={(e) =>
              updateCustomer("customerNotes", e.target.value)
            }
            placeholder="Any special delivery instructions?"
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* Order Summary */}
        <div className="rounded-xl border border-white/10 bg-white/3 p-4">
          <div className="flex justify-between text-sm text-white/60">
            <span>Items</span>
            <span>{cartCount}</span>
          </div>

          <div className="mt-2 flex justify-between text-sm text-white/60">
            <span>Estimated subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <p className="mt-3 text-xs leading-5 text-white/35">
            Final pricing and shipping charges will be calculated and
            confirmed by our server.
          </p>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={onBack}
            className="w-full rounded-full border border-white/15 px-5 py-3.5 text-sm font-bold text-white/70 transition-colors hover:bg-white/5 disabled:opacity-40"
          >
            Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ff1764] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#c90046] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Submitting Order...
              </>
            ) : (
              "Submit Order Request"
            )}
          </button>
        </div>

        {/* Payment Disclaimer */}
        <p className="text-center text-xs leading-5 text-white/35">
          No online payment will be collected. Our team will contact you
          with payment instructions.
        </p>
      </form>
    </>
  );
}
