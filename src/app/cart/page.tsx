'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type CartItem = {
  id: string
  name: string
  mg: string
  price: number
  quantity: number
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('cart')
      const parsed: CartItem[] = stored ? JSON.parse(stored) : []
      setCart(parsed)
    }
  }, [])

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart)
    window.localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const increaseQty = (id: string) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    updateCart(newCart)
  }

  const decreaseQty = (id: string) => {
    const newCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    )
    updateCart(newCart)
  }

  const removeItem = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id)
    updateCart(newCart)
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <main
      style={{
        padding: '40px',
        maxWidth: '800px',
        margin: '0 auto',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ marginBottom: '30px' }}>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #444',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '20px',
          }}
        >
          <h2>{item.name}</h2>
          <p>{item.mg}</p>
          <p>${item.price.toFixed(2)}</p>

          <div style={{ marginTop: '10px' }}>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            style={{
              marginTop: '10px',
              backgroundColor: 'red',
              padding: '6px 12px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <h2 style={{ marginTop: '30px' }}>Subtotal: ${subtotal.toFixed(2)}</h2>
      )}

      {/* ⭐ BUTTON ROW: Keep Shopping + Checkout */}
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <Link
          href="/"
          style={{
            padding: '10px 20px',
            background: '#ffffff22',
            borderRadius: '6px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          Keep Shopping
        </Link>

        <Link
          href="/checkout"
          style={{
            padding: '10px 20px',
            background: '#4caf50',
            borderRadius: '6px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          Checkout
        </Link>
      </div>
    </main>
  )
}
