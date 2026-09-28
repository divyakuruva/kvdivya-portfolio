import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home">K.V.<span>Divya</span></a>
        <p>BTech CSE Student <i /> Aspiring Data Analyst</p>
        <SocialLinks compact />
        <span className="copyright">© 2026 Kuruva Venkat Divya. All rights reserved.</span>
      </div>
    </footer>
  )
}
