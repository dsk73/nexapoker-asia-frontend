
"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Copy,
  Send,
  Check,
  X,
} from "lucide-react";

export type OrderResponse = {
  orderNumber: string;
  orderStatus: string;
  paymentStatus: string;
  subtotal: number;
  shippingCost: number;
  totalAmount: number;
  currency: string;
  alreadyCreated: boolean;
};

type Props = {
  order: OrderResponse;
  formatPrice: (price: number, currencyCode?: string) => string;
  supportLink: string;
  onClose: () => void;
};

export default function OrderSuccess({
  order,
  formatPrice,
  supportLink,
  onClose,
}: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const copyOrderNumber = async () => {
    try {
      await navigator.clipboard.writeText(order.orderNumber);
      setIsCopied(true);

      window.setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <div className="relative py-3 text-center">
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close order confirmation"
        className="absolute -right-2 -top-2 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={20} />
      </button>

      {/* Success Icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-400">
        <CheckCircle2 size={43} />
      </div>

      {/* Success Heading */}
      <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-green-400">
        Request Submitted
      </p>

      <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
        Thank You!
      </h2>

      <p className="mt-3 text-sm leading-7 text-white/55">
        Your order request has been successfully submitted.
      </p>

      {/* Order Details */}
      <div className="mt-7 rounded-2xl border border-white/10 bg-white/3 p-5 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
          Order Number
        </p>

        {/* Order Number and Copy Button */}
        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="min-w-0 break-all text-lg font-black text-[#ff1764] sm:text-xl">
            {order.orderNumber}
          </p>

          <button
            type="button"
            onClick={copyOrderNumber}
            aria-label="Copy order number"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/80 transition-colors hover:border-[#ff1764]/50 hover:bg-[#ff1764]/10 hover:text-white"
          >
            {isCopied ? (
              <>
                <Check size={14} className="text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Important Order Number Instruction */}
        <div className="mt-4 rounded-xl border border-[#ff1764]/25 bg-[#ff1764]/10 p-3">
          <p className="text-xs font-semibold leading-6 text-[#ff8aaf]">
            <span className="font-black text-[#ff1764]">
              Important:
            </span>{" "}
            Please copy your order number and share it with our admin
            on Telegram when contacting us for payment instructions.
          </p>
        </div>

        <div className="my-5 border-t border-white/10" />

        {/* Order Status */}
        <div className="flex justify-between gap-3 text-sm">
          <span className="text-white/50">
            Order Status
          </span>

          <span className="font-semibold capitalize text-yellow-400">
            {order.orderStatus}
          </span>
        </div>

        {/* Payment Status */}
        <div className="mt-3 flex justify-between gap-3 text-sm">
          <span className="text-white/50">
            Payment Status
          </span>

          <span className="font-semibold capitalize text-yellow-400">
            {order.paymentStatus}
          </span>
        </div>

        {/* Subtotal */}
        <div className="mt-3 flex justify-between gap-3 text-sm">
          <span className="text-white/50">
            Subtotal
          </span>

          <span className="font-semibold text-white">
            {formatPrice(order.subtotal, order.currency)}
          </span>
        </div>

        {/* Shipping */}
        <div className="mt-3 flex justify-between gap-3 text-sm">
          <span className="text-white/50">
            Shipping
          </span>

          <span className="font-semibold text-white">
            {formatPrice(order.shippingCost, order.currency)}
          </span>
        </div>

        <div className="my-4 border-t border-white/10" />

        {/* Total Amount */}
        <div className="flex justify-between gap-3">
          <span className="font-bold text-white">
            Total Amount
          </span>

          <span className="text-xl font-black text-[#ff1764]">
            {formatPrice(order.totalAmount, order.currency)}
          </span>
        </div>
      </div>

      {/* Telegram Contact */}
      <div className="mt-7 rounded-xl border border-white/10 bg-white/3 p-4">
        <p className="text-sm leading-6 text-white/65">
          For payment instructions and assistance, contact our
          team on Telegram.
        </p>

        <a
          href={supportLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#229ED9] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#168ac0]"
        >
          <Send size={17} />
          Contact Us on Telegram
        </a>
      </div>
    </div>
  );
}
