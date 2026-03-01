import StorageWrapper from './StorageWrapper'

export default function Home() {
  const products = [
    {
      name: 'GLP-T',
      price: '$39.99',
      description: '5mg Peptide Vial',
      image: '/placeholder-bottle.png',
    },
    {
      name: 'GLP-R',
      price: '$44.99',
      description: '5mg Peptide Vial',
      image: '/placeholder-bottle.png',
    },
    {
      name: 'GHK-CU',
      price: '$49.99',
      description: '2mg Peptide Vial',
      image: '/placeholder-bottle.png',
    },
    {
      name: 'KLOW',
      price: '$39.99',
      description: '2mg Peptide Vial',
      image: '/placeholder-bottle.png',
    },
    {
      name: 'Semaglutide',
      price: '$59.99',
      description: '5mg Peptide Vial',
      image: '/placeholder-bottle.png',
    },
    {
      name: 'GLOW',
      price: '$34.99',
      description: '5mg Peptide Vial',
      image: '/placeholder-bottle.png',
    },
    {
      name: 'BAC WATER',
      price: '$49.99',
      description: '10mg Peptide Vial',
      image: '/placeholder-bottle.png',
    },
    {
      name: 'Melanotan II',
      price: '$39.99',
      description: '10mg Peptide Vial',
      image: '/placeholder-bottle.png',
    },
  ]

  // Hide Semaglutide and Melanotan II
  const visibleProducts = products.filter(
    (p) => !['Semaglutide', 'Melanotan II'].includes(p.name)
  )

  return (
    <>
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
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            maxWidth: '1000px',
            margin: '40px auto 0 auto',
          }}
        >
          {visibleProducts.map((p, index) => (
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
                  marginBottom: '8px',
                  color: 'white',
                }}
              >
                {p.name}
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  marginBottom: '8px',
                  color: 'white',
                }}
              >
                {p.description}
              </p>

              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '16px',
                  color: 'white',
                }}
              >
                {p.price}
              </p>

              <a
                href={`/products/${p.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, '')}`}
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

        {/* STORAGE BOXES SECTION */}
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
