'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import GLPTVariant from './GLPTVariant'

function CartHeader() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('cart')
      const cart = stored ? JSON.parse(stored) : []
      const total = cart.reduce(
        (sum: number, item: { quantity: number }) => sum + item.quantity,
        0
      )
      setCount(total)
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0px 360px 10px 20px', // ← moves cart slightly left but still on right
      }}
    >
      <Link
        href="/cart"
        style={{
          color: 'white',
          fontSize: '18px',
          padding: '6px 14px',
          borderRadius: '6px',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        🛒 Cart ({count})
      </Link>
    </div>
  )
}

function addToCart(item: {
  id: string
  name: string
  mg: string
  price: number
}) {
  if (typeof window === 'undefined') return

  const existing = window.localStorage.getItem('cart')

  const cart: {
    id: string
    name: string
    mg: string
    price: number
    quantity: number
  }[] = existing ? JSON.parse(existing) : []

  const index = cart.findIndex((p) => p.id === item.id)

  if (index >= 0) {
    cart[index].quantity += 1
  } else {
    cart.push({ ...item, quantity: 1 })
  }

  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export default function GLPTPage() {
  const variants = [
    { mg: '10mg', price: 35, qty: 0 },
    { mg: '30mg', price: 85, qty: 0 },
    { mg: '40mg', price: 95, qty: 0 },
    { mg: '60mg', price: 125, qty: 10 },
  ]

  return (
    <>
      <Link href="/">
        <img src="/logo.png" className="site-logo" />
      </Link>

      <CartHeader />

      <main
        style={{
          paddingTop: '40px',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white', marginBottom: '40px' }}>GLP‑T Variants</h1>

        <div
          className="product-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
          }}
        >
          {variants.map((v, i) => (
            <GLPTVariant
              key={i}
              id={`glpt-${v.mg}`}
              productName="GLP‑T"
              mg={v.mg}
              price={v.price}
              qty={v.qty}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </>
  )
}
