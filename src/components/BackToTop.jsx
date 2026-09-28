import { ArrowUp } from 'lucide-react'

export default function BackToTop({ visible }) {
  return (
    <a className={`back-to-top ${visible ? 'is-visible' : ''}`} href="#home" aria-label="Back to top" tabIndex={visible ? 0 : -1}>
      <ArrowUp size={18} />
    </a>
  )
}
