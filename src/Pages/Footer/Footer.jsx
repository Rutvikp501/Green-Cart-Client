import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
Welcome to Desi Greens your one-stop destination for fresh,
 high-quality groceries. Shop online for a diverse range of farm-fresh produce, 
 premium meats, and pantry essentials. Enjoy the convenience of home delivery or opt
  for hassle-free in-store pickup. Our dedicated support team is here to assist you.
 Experience the joy of cooking with the finest ingredients from Desi Greens. Happy shopping!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Kalyan, Thane, Maharashtra, 421102
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 8591575654</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: patilrutvik501@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Vegitables</div>
          <span className="text">Fruite</span>
          <span className="text">Spices & Herbs</span>
          <span className="text">Green Leaves</span>
          <span className="text">Deary Products</span>
          <span className="text">Egg & Meats</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">Made with❤️by Rutvik</span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
