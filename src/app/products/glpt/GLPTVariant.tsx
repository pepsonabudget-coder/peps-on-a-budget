'use client'

export default function GLPTVariant({
  productName,
  mg,
  price,
  qty,
}: {
  productName: string
  mg: string
  price: string
  qty: number
}) {
  const outOfStock = qty === 0

  return (
    <div
      style={{
        backgroundColor: 'transparent',
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        opacity: outOfStock ? 0.4 : 1,
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
        alt={productName}
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
        {productName}
      </h2>

      <p style={{ fontSize: '18px', color: 'white' }}>{mg}</p>

      <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
        {price}
      </p>

      <p style={{ fontSize: '18px', color: 'lime' }}>QTY {qty}</p>

      <button
        style={{
          marginTop: '14px',
          padding: '10px 20px',
          backgroundColor: '#2c3e50',
          color: 'white',
          borderRadius: '6px',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}
