'use client'

import StorageBox from './products/storage/StorageBox'

export default function StorageSection() {
  return (
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
      <h2 style={{ color: 'white', marginBottom: '30px' }}>Storage Boxes</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
        }}
      >
        <StorageBox qty={3} />
        <StorageBox qty={2} />
        <StorageBox qty={0} />
        <StorageBox qty={5} />
      </div>
    </section>
  )
}
