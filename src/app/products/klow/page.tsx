import Link from 'next/link'
import GLPTVariant from '../glpt/GLPTVariant'

export default function KLOWPage() {
  const variants = [
    { mg: '80mg', price: '$70', qty: 0 }, // change qty anytime
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
        <h1 style={{ color: 'white', marginBottom: '40px' }}>KLOW Variants</h1>

        <div
          className="product-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '30px',
          }}
        >
          {variants.map((v, i) => (
            <GLPTVariant
              key={i}
              productName="KLOW"
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
