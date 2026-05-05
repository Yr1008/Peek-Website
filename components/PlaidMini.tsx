export default function PlaidMini({ light = false }: { light?: boolean }) {
  return (
    <span
      className="plaid-mini"
      style={
        light
          ? { background: 'rgba(255,255,255,.18)', color: '#fff' }
          : undefined
      }
    >
      <svg viewBox="0 0 14 14" width="11" height="11" fill="currentColor" aria-hidden="true">
        <path d="M7 1L2 3v3.5c0 3 2.1 5.6 5 6.5 2.9-.9 5-3.5 5-6.5V3L7 1zm-.5 8.7L4 7.2l1-1 1.5 1.5L9 5.2l1 1-3.5 3.5z" />
      </svg>
      secured by Plaid
    </span>
  )
}
