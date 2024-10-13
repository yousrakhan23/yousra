import './Hero.css';
import hand_icon from '../../assets/hand_icon.jpg';
import arrow_icon from '../../assets/arrow_icon.jpg';
import hero_img from '../../assets/hero_img.jpg';

const Hero = () => {
  return (
    <div className="hero">

      <div className="hero-left">
        <h2>New Arrivals</h2>
        <div>

          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>

          <p>Collections</p>
          <p>for everyone</p>

        </div>

        <div className="hero-latest-btn">
          <div> Latest Collection </div>
          <img src={arrow_icon} alt='Arrow' className='arrow-icon' />
        </div>

      </div>


      <div className="hero-right">
        <img src={hero_img} alt='' />

      </div>
    </div>
  );
}

export default Hero; 