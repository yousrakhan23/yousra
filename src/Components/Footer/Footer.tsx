
import './Footer.css';
import footer_logo from '../../assets/shopping_logo.png';
import instagram_icon from '../../assets/instagram_icon.png';
import whatsapp_icon from '../../assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt='' />
                <p>MART</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Contact</li>

            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt='' />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt='' />
                </div>

            </div>

            <div className="footer-copyright">
                <hr />
                <p>created by Yousra Khan - All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer