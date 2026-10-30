import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer-title">Contactez-nous</h3>

      <div className="footer-info">
        <p className="footer-email">✉ admin@routewise.com</p>
        <p className="footer-phone">📞 +33 12 45 67 89</p>
      </div>

      <p className="copyright">
        © 2024 RouteWise. Tous droits réservés.
      </p>
    </footer>
  )
}