import "./Banner.scss";
import HeadphoneCanvas from "../3d/Three_screen";
import { useNavigate } from "react-router";
import gocerybucket from "../../assets/home1.webp"
const Banner = () => {
    const navigate = useNavigate()
    const navigateFn = () =>{
        navigate(`/product`)
    }
    return(
         <div className="hero-banner"  id='#home'>
            <div className="content">
                <div className="text-content">
                    <h1>EXPLORE</h1>
                    <p>From farm to table, we deliver the finest ingredients to satisfy your culinary cravings.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2" onClick={navigateFn}>Shop Now</div>
                    </div>
                </div>
                <div  className='banner-img'>
                    {/* <HeadphoneCanvas /> */}
                    <img src={gocerybucket} />
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
