
"use client";

import {
  Send,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

export default function CheckoutConfirmation({
  onBack,
  onContinue,
}: Props) {
  return (
    <>
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff1764]/10 text-[#ff1764]">
        <ShoppingBag size={27} />
      </div>

      {/* Heading */}
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#ff1764]">
        Almost There
      </p>

      <h2 className="mt-2 text-2xl font-black text-white">
        Ready to place your order?
      </h2>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-white/60">
        Before continuing, please note that this is an order request.
        Your order details will be shared with the Nexa Poker order team
        through our private Telegram group.
      </p>

      {/* Order Information */}
      <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
        <div className="flex items-center gap-3">
          <ShieldCheck
            className="shrink-0 text-[#ff1764]"
            size={20}
          />

          <p className="text-sm text-white/80">
            Our team will review and process your order.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Send
            className="shrink-0 text-[#ff1764]"
            size={20}
          />

          <p className="text-sm text-white/80">
            Payment instructions will be provided separately.
          </p>
        </div>
      </div>

      {/* Payment Disclaimer */}
      <p className="mt-5 text-xs leading-6 text-white/40">
        No payment will be collected on this website. Submitting this
        request does not mean your order has been paid or confirmed.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onBack}
          className="w-full rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white/70 transition-colors hover:bg-white/5"
        >
          Go Back
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-full bg-[#ff1764] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#c90046]"
        >
          Yes, Continue
        </button>
      </div>
    </>
  );
}
