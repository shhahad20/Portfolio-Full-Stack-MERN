
import "../styles/footer.scss";

const Footer = () => {
const cureentYear= new Date().getFullYear();
  return (
    <div className="footer">
        <h3>Copyright © {cureentYear} SHAHAD ALTHARWA. All Rights Reserved.</h3>
        <p>Made with love and coffee.☕</p>
    </div>
  );
};

export default Footer;
