'use client'

import StorageBox from './products/storage/StorageBox'

export default function StorageWrapper() {
  return (
    <div
      className="storage-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '30px',
      }}
    >
      <StorageBox qty={0} />
      <StorageBox qty={0} />
      <StorageBox qty={0} />
      <StorageBox qty={0} />
    </div>
  )
}
