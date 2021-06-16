import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Image from 'next/image'

const CarouselComp = ({ data }) => {
  const settings = {
    autoPlay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {data.map((slide) => {
        return (
          <div key={slide.id}>
            <div className="carousel_inner">
              <Image
                src={`/images/arts/${slide.name}`}
                width={1920}
                height={1080}
                layout="responsive"
                alt={slide.title}
              />
              <div className="carousel_title">{slide.title}</div>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

export default CarouselComp
