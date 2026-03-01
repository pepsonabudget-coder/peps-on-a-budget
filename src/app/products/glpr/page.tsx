import Link from 'next/link'
import GLPTVariant from '../glpt/GLPTVariant'

export default function GLPRPage() {
  const variants = [
    { mg: '10mg', price: '$90', qty: 0 },
    { mg: '20mg', price: '$90', qty: 0 },
    { mg: '30mg', price: '$90', qty: 0 }, // OUT OF STOCK
    { mg: '50mg', price: '$90', qty: 0 },
  ]

  return (
    <>
      {/* CLICKABLE LOGO */}
      <Link href="/">
        <img src="/logo.png" className="site-logo" />
      </Link>

      <main
        style={{
          paddingTop: '40px',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: 'white', marginBottom: '40px' }}>GLP‑R Variants</h1>

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
              productName="GLP‑R"
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
