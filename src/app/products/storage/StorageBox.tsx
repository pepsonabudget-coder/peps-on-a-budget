'use client'

import { useState } from 'react'

export default function StorageBox({ qty: initialQty }: { qty: number }) {
  const [qty, setQty] = useState(initialQty)
  const outOfStock = qty === 0

  return (
    <div
      style={{
        position: 'relative',
        opacity: outOfStock ? 0.4 : 1,
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
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
        src="/boxplaceholder.png"
        alt="Storage Box"
        style={{
          width: '140px',
          height: '140px',
          objectFit: 'contain',
          marginBottom: '12px',
        }}
      />

      <h2 style={{ color: 'white', marginBottom: '6px' }}>Storage Box</h2>

      <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '6px' }}>
        $40
      </p>

      <p style={{ color: 'lime', marginBottom: '10px' }}>QTY {qty}</p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={() => setQty(Math.max(0, qty - 1))}
          style={{
            padding: '6px 12px',
            backgroundColor: '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          -
        </button>

        <button
          onClick={() => setQty(qty + 1)}
          style={{
            padding: '6px 12px',
            backgroundColor: '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          +
        </button>
      </div>

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
