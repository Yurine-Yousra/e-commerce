import Card from "../Components/Card"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trendy = () => {
  const settings ={
    dots : true,
    infinite: true,
    autoplay : true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive : [
        {
            breakpoint : 992,
            settings :{
                slidesToShow :2,
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
     <div className="container" id="trendy">
          <h1 className="spany btn__secondary rounded-none ">Trends</h1>
    <Slider {...settings} className="">
      {[1,2,3,4,5].map((number) => (
        <div className="slick-items" >
            <Card key={number}  />
        </div>
      
      ))}
    </Slider>
    </div>
    
  )
}

export default Trendy
