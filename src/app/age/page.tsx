'use client'

import { useRouter } from 'next/navigation'

export default function AgePage() {
  const router = useRouter()

  const handleEnter = () => {
    // No remembering — always show disclaimer on every visit
    router.push('/')
  }

  const handleExit = () => {
    window.location.href = 'https://google.com'
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#e3e2e2',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h1
          style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}
        >
          Restricted Access – For Research Only Age Verification
        </h1>

        <p style={{ fontSize: '20px', marginBottom: '24px', lineHeight: 1.5 }}>
          To continue, you must confirm that you are at least{' '}
          <strong>21 years of age</strong>.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <button
            onClick={handleEnter}
            style={{
              padding: '12px 24px',
              backgroundColor: 'green',
              color: 'white',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Yes, I am 21+
          </button>

          <button
            onClick={handleExit}
            style={{
              padding: '12px 24px',
              backgroundColor: '#ba2c27',
              color: 'white',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            No, Exit
          </button>
        </div>

        <div
          style={{
            textAlign: 'left',
            fontSize: '18px',
            lineHeight: 1.5,
            paddingLeft: '60px',
          }}
        >
          <p style={{ marginBottom: '12px' }}>
            By entering and using this website, you confirm that you have read,
            understood, and agree to the following terms:
          </p>

          <p style={{ marginBottom: '12px' }}>
            You are 21 years of age or older. You understand that all products
            offered on this website are for research purposes only and are not
            intended for human or veterinary use, nor for diagnostic,
            therapeutic, or medical applications. All information provided on
            this website is intended solely for educational and research-related
            purposes.
          </p>

          <p style={{ marginBottom: '12px' }}>
            You affirm that you are a qualified researcher or informed purchaser
            and are fully aware of the intended use restrictions associated with
            the products sold. You accept full responsibility for the proper
            handling, storage, and use of any product obtained from this
            website, in compliance with all applicable laws, regulations, and
            guidelines.
          </p>

          <p style={{ marginBottom: '12px' }}>
            You acknowledge that Peps On A Budget, its owners, and affiliates
            assume no liability for misuse, improper handling, or unintended
            application of any products purchased.
          </p>

          <p>
            You agree to read, understand, and comply with this website’s Terms
            and Conditions, Privacy Policy, and Legal & Compliance Information.
            If you do not meet these requirements, you must exit this website
            immediately.
          </p>
        </div>
      </div>
    </div>
  )
}
