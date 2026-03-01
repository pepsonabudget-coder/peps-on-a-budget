'use client'

import { useState } from 'react'

type BacBoxProps = {
  size: string
  price: number
  initialQty: number
}

export default function BacWaterPage() {
  const variants: BacBoxProps[] = [
    { size: '10ml', price: 8, initialQty: 0 },
    { size: '30ml', price: 25, initialQty: 0 }, // OUT OF STOCK
  ]

  return (
    <>
      {/* CLICKABLE LOGO BACK TO HOME */}
      <a href="/">
        <img src="/logo.png" className="site-logo" />
      </a>

      <main
        style={{
          textAlign: 'center',
          paddingTop: '200px',
          paddingBottom: '60px',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <h1 style={{ color: 'white', marginBottom: '40px' }}>BAC WATER</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {variants.map((v, index) => (
            <BacBox
              key={index}
              size={v.size}
              price={v.price}
              initialQty={v.initialQty}
            />
          ))}
        </div>
      </main>
    </>
  )
}

function BacBox({ size, price, initialQty }: BacBoxProps) {
  const [qty] = useState(initialQty)
  const outOfStock = qty === 0

  return (
    <div
      style={{
        position: 'relative',
        opacity: outOfStock ? 0.4 : 1,
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'transparent',
      }}
    >
      {outOfStock && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: 'red',
            fontSize: '22px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            zIndex: 10,
          }}
        >
          OUT OF STOCK
        </div>
      )}

      <img
        src="/placeholder-bottle.png"
        alt="BAC WATER"
        style={{
          width: '160px',
          height: '160px',
          objectFit: 'contain',
          marginBottom: '12px',
        }}
      />

      <h2 style={{ color: 'white', marginBottom: '6px' }}>BAC WATER</h2>

      <p style={{ color: 'white', marginBottom: '6px' }}>{size}</p>

      <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '6px' }}>
        ${price}
      </p>

      {/* QTY ONLY — NO BUTTONS */}
      <p style={{ color: 'lime', marginBottom: '10px' }}>QTY {qty}</p>

      <button
        style={{
          marginTop: '12px',
          padding: '10px 20px',
          backgroundColor: '#2c3e50',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}
