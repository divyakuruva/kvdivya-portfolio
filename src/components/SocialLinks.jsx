import { Github, Linkedin, Mail } from 'lucide-react'

const socialItems = [
  { label: 'GitHub', icon: Github, value: 'Add your GitHub link' },
  { label: 'LinkedIn', icon: Linkedin, value: 'Add your LinkedIn link' },
  { label: 'Email', icon: Mail, value: 'Add your email address' },
]

export default function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? 'social-links-compact' : ''}`}>
      {socialItems.map(({ label, icon: Icon, value }) => (
        <span className="social-item" key={label} title={value} aria-label={`${label}: ${value}`}>
          <Icon size={compact ? 16 : 18} aria-hidden="true" />
          {!compact && <span>{label}</span>}
        </span>
      ))}
    </div>
  )
}
