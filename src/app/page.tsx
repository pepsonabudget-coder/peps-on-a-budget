'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import StorageWrapper from './StorageWrapper'

// Cart Header Component
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
        padding: '20px 40px',
        position: 'relative',
        zIndex: 10000,
      }}
    >
      <Link
        href="/cart"
        style={{
          color: 'white',
          fontSize: '20px',
          padding: '6px 14px',
          borderRadius: '6px',
          textDecoration: 'none',
        }}
      >
        🛒 Cart ({count})
      </Link>
    </div>
  )
}

export default function Home() {
  const [verified, setVerified] = useState(false)

  // Load saved verification on page load
  useEffect(() => {
    const saved = localStorage.getItem('ageVerified')
    if (saved === 'true') {
      setVerified(true)
    }
  }, [])

  const handleEnter = () => {
    localStorage.setItem('ageVerified', 'true')
    setVerified(true)
  }

  const handleExit = () => {
    window.location.href = 'https://google.com'
  }

  // AGE DISCLAIMER SCREEN
  if (!verified) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#e3e2e2',
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
        }}
      >
        <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '16px',
            }}
          >
            Restricted Access – For Research Only Age Verification
          </h1>

          <p
            style={{ fontSize: '20px', marginBottom: '24px', lineHeight: 1.5 }}
          >
            To continue, you must confirm that you are at least{' '}
            <strong>21 years of age</strong>.
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            <button
              onClick={handleEnter}
              style={{
                padding: '12px 24px',
                backgroundColor: 'green',
                color: 'white',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Yes, I am 21+
            </button>

            <button
              onClick={handleExit}
              style={{
                padding: '12px 24px',
                backgroundColor: '#ba2c27',
                color: 'white',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              No, Exit
            </button>
          </div>

          <div
            style={{
              textAlign: 'left',
              fontSize: '18px',
              lineHeight: 1.5,
              paddingLeft: '60px',
            }}
          >
            <p style={{ marginBottom: '12px' }}>
              By entering and using this website, you confirm that you have
              read, understood, and agree to the following terms:
            </p>

            <p style={{ marginBottom: '12px' }}>
              You are 21 years of age or older. You understand that all products
              offered on this website are for research purposes only and are not
              intended for human or veterinary use.
            </p>

            <p style={{ marginBottom: '12px' }}>
              You affirm that you are a qualified researcher or informed
              purchaser and accept full responsibility for proper handling and
              compliance.
            </p>

            <p style={{ marginBottom: '12px' }}>
              You acknowledge that Peps On A Budget assumes no liability for
              misuse or unintended application of any products purchased.
            </p>

            <p>
              If you do not meet these requirements, you must exit this website
              immediately.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // HOMEPAGE (NO PRICES, NO MG, NO PEPTIDE VIAL)
  const products = [
    { name: 'GLP-T', description: '', image: '/placeholder-bottle.png' },
    { name: 'GLP-R', description: '', image: '/placeholder-bottle.png' },
    { name: 'GHK-CU', description: '', image: '/placeholder-bottle.png' },
    { name: 'KLOW', description: '', image: '/placeholder-bottle.png' },
    { name: 'GLOW', description: '', image: '/placeholder-bottle.png' },
    { name: 'BAC WATER', description: '', image: '/placeholder-bottle.png' },
  ]

  return (
    <>
      <CartHeader />

      <img src="/logo.png" className="site-logo" />

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
        <div
          className="product-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            maxWidth: '1000px',
            margin: '40px auto 0 auto',
          }}
        >
          {products.map((p, index) => (
            <div
              key={index}
              className="card"
              style={{
                backgroundColor: 'transparent',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: '180px',
                  height: '180px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                }}
              />

              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '70px',
                  color: 'white',
                }}
              >
                {p.name}
              </h2>

              <a
                href={`/products/${p.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#2c3e50',
                  color: 'white',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                View Product
              </a>
            </div>
          ))}
        </div>

        <section
          style={{
            marginTop: '60px',
            width: '100%',
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: 'white', marginBottom: '30px' }}>
            Storage Boxes
          </h2>

          <StorageWrapper />
        </section>
      </main>
    </>
  )
}
