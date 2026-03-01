import Link from 'next/link'
import StorageBox from './StorageBox'

export default function StoragePage() {
  const boxes = [{ qty: 0 }, { qty: 0 }, { qty: 0 }, { qty: 5 }]

  return (
    <>
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
        <h1 style={{ color: 'white', marginBottom: '40px' }}>Storage Boxes</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
          }}
        >
          {boxes.map((b, i) => (
            <StorageBox key={i} qty={b.qty} />
          ))}
        </div>
      </main>
    </>
  )
}
