'use client'

import { useState } from 'react'
import Link from 'next/link'

interface CartItem {
  id: string
  title: string
  price: number
  creator: string
  preview: string
}

const cartItems: CartItem[] = [
  {
    id: '1',
    title: 'Modern Dashboard UI Kit',
    price: 49.99,
    creator: 'Alex Design Studio',
    preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    title: 'E-commerce Component Library',
    price: 79.99,
    creator: 'Jane Studios',
    preview: 'https://images.unsplash.com/photo-1545665225-b489fbb4ee5d?w=100&h=100&fit=crop',
  },
]

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(cartItems)
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {items.length > 0 ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <img
                      src={item.preview}
                      alt={item.title}
                      className="h-24 w-24 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.creator}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="text-lg font-bold text-gray-900">
                          ${item.price}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Your cart is empty
                </h3>
                <Link
                  href="/browse"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-600"
                >
                  Continue shopping
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-gray-200 bg-white p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="text-gray-900 font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>

              <button
                disabled={items.length === 0}
                className="w-full rounded-lg bg-blue-500 py-2 font-medium text-white hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>

              <p className="text-center text-xs text-gray-600 mt-4">
                Secure checkout with Stripe or Razorpay
              </p>

              <Link
                href="/browse"
                className="block text-center mt-4 text-blue-500 hover:text-blue-600 text-sm font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
