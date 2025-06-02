import './footer.scss'
const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text"> Tobias Kjernell @ {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;