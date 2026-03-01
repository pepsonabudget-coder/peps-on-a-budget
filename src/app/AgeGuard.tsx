'use client'
import { useEffect, ReactNode, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function AgeGuard({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified')

    // Always allow the /age page to render
    if (pathname === '/age') {
      setReady(true)
      return
    }

    // If not verified, redirect to /age
    if (verified !== 'true') {
      router.replace('/age')
      return
    }

    // Verified → allow rendering
    setReady(true)
  }, [pathname, router])

  // Prevent rendering until ready
  if (!ready) return null

  return <>{children}</>
}
