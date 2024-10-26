import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image01 from '../assets/front-view-elegant-women-perfume-colored-flowers-beige-abstract-background.jpg';
import Image02 from '../assets/irena-kefala-6s25PQmXn2s-unsplash.jpg'
import Image03 from '../assets/ash-edmonds-gyzH19KIvIQ-unsplash.jpg'
import Image04 from '../assets/siora-photography-8m4V_wPWwbY-unsplash.jpg'
import Image05 from '../assets/laura-chouette-_GhyVSJbtKE-unsplash.jpg'
import '../App.css'

const Welcome = () => {
  const WelcomeArray = [
    {
    image :Image01,
    titre:"A great perfume is a journey of emotions; let it take you to places you've never been.",
    color:'black',
    },
    {
      image :Image02,
      titre:"Elevate your everyday with a fragrance that whispers sophistication and allure",
      color:'black',
      },
      {
        image :Image03,
        titre:"Awaken your senses and embrace the art of allure with every fragrant moment.",
        color:'white',
        },
        {
          image :Image04,
          titre:"Transform your presence with a fragrance that captivates hearts and sparks curiosity"
          },
          {
            image :Image05,
            titre:"In a world full of noise, let your scent be the soft whisper of elegance.",
            color:'white',
            },
  ]
  const settings ={
    dots : true,
    infinite: true,
    autoplay : true,
    speed:3000,
    swipeToSlide:true,
    autoplaySpeed:3000,
    slidesToShow:1,
    

    responsive : [
        {
            breakpoint : 992,
            settings :{
                slidesToShow :1,
                slidesToScroll :1,
                infinite:true,
                dots:true,
            }
        },
        {
            breakpoint :576,
            settings :{
                slidesToShow :1,
                slidesToScroll :1,
            
            } 
        }
    ]
}
    /* in this page i will display  the liked products of the user by fetching the liked array from the user's instance*/ 
  return (
     <div className="container " id='welcome'>
    <Slider {...settings} className="">
      {WelcomeArray?.map((obj) => (
        <div className="relative w-full " >
            <figure className='w-full'>
              <img src={obj.image} className='h-[550px] w-full'  />
            </figure>
            <h2 
            className={`absolute left-20 top-16 font-extrabold capitalize text-[30px]   font-dancing w-[200px]  text-${obj.color}`}
             id='dancing'>{obj.titre}</h2>
        </div>
      
      ))}
    </Slider>
   
    </div>
    
  )
}

export default Welcome
