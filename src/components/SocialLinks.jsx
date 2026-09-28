import { Github, Linkedin, Mail } from 'lucide-react'

export const contactEmail = 'venkatadivyakuruva@gmail.com'

const socialItems = [
  { label: 'GitHub', icon: Github, value: 'divyakuruva', href: 'https://github.com/divyakuruva' },
  { label: 'LinkedIn', icon: Linkedin, value: 'Venkata Divya Kuruva', href: 'https://www.linkedin.com/in/venkata-divya-kuruva-61b4b4353/' },
  { label: 'Email', icon: Mail, value: contactEmail, href: `mailto:${contactEmail}` },
]

export default function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? 'social-links-compact' : ''}`}>
      {socialItems.map(({ label, icon: Icon, value, href }) => {
        const content = <><Icon size={compact ? 16 : 18} aria-hidden="true" />{!compact && <span>{label}</span>}</>
        return (
          <a className="social-item" href={href} key={label} title={value} aria-label={`${label}: ${value}`} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}>
            {content}
          </a>
        )
      })}
    </div>
  )
}
