import Link from 'next/link'
import GLPTVariant from '../glpt/GLPTVariant'

export default function GHKCUPage() {
  const variants = [
    { mg: '50mg', price: '$120', qty: 0 },
    { mg: '100mg', price: '$120', qty: 0 }, // OUT OF STOCK
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
        <h1 style={{ color: 'white', marginBottom: '40px' }}>
          GHK‑Cu Variants
        </h1>

        <div
          className="product-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
          }}
        >
          {variants.map((v, i) => (
            <GLPTVariant
              key={i}
              productName="GHK‑Cu"
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
