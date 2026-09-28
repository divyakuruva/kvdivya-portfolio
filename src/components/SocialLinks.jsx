import { Github, Linkedin, Mail } from 'lucide-react'

const socialItems = [
  { label: 'GitHub', icon: Github, value: 'Add your GitHub link' },
  { label: 'LinkedIn', icon: Linkedin, value: 'Add your LinkedIn link' },
  { label: 'Email', icon: Mail, value: 'venkatadivyakuruva@gmail.com', href: 'mailto:venkatadivyakuruva@gmail.com' },
]

export const contactEmail = 'venkatadivyakuruva@gmail.com'

export default function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? 'social-links-compact' : ''}`}>
      {socialItems.map(({ label, icon: Icon, value, href }) => {
        const content = <><Icon size={compact ? 16 : 18} aria-hidden="true" />{!compact && <span>{label}</span>}</>
        return href ? (
          <a className="social-item" href={href} key={label} title={value} aria-label={`${label}: ${value}`}>{content}</a>
        ) : (
          <span className="social-item" key={label} title={value} aria-label={`${label}: ${value}`}>{content}</span>
        )
      })}
    </div>
  )
}
