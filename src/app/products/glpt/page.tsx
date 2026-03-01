import Link from 'next/link'
import GLPTVariant from './GLPTVariant'

export default function GLPTPage() {
  const variants = [
    { mg: '10mg', price: '$80', qty: 0 },
    { mg: '30mg', price: '$80', qty: 0 },
    { mg: '40mg', price: '$80', qty: 0 },
    { mg: '60mg', price: '$80', qty: 0 },
  ]

  return (
    <>
      {/* ⭐ ONLY THE LOGO GOES INSIDE THE LINK ⭐ */}
      <Link href="/">
        <img src="/logo.png" className="site-logo" />
      </Link>

      {/* ⭐ EVERYTHING ELSE MUST BE OUTSIDE THE LINK ⭐ */}
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
              productName="GLP‑T"
              mg={v.mg}
              price={v.price}
              qty={v.qty}
            />
          ))}
        </div>
      </main>
    </>
  )
}
