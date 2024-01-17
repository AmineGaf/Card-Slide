import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import member1 from '../assets/member1.png'
import member2 from '../assets/member2.png'
import member3 from '../assets/member3.png'
import member4 from '../assets/member4.png'
import member5 from '../assets/member5.png'
import backgroundImg from '../assets/background.png';

//  function Arrow(props) {
//    const { className, style, onClick } = props;
//    return (
//      <div
//        className={className}
//        style={{  display: "block", background: "black", borderRadius: "100%", paddingTop: 1}}
//       onClick={onClick}
//      />
//    );
//  }

const Team = () => {
   
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings:   {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const slides = [member1, member2, member3, member4, member5, member1, member2, member3,member4, member5];

  return (
    <div className=" flex flex-col gap-10 mt-20" style={{ backgroundImage: `url(${backgroundImg})`,  backgroundSize: 1000}}>
        <h1 className="text-xl font-mono text-center pt-10">Meet Out Skilled Team</h1>
      <div className="">
          <Slider {...settings}>
            {slides.map((s, index) => (
              <img key={index} src={s} />
              ))}
          </Slider>
        </div>
      </div>
  )
}

export default Team