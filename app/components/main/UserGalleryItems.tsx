import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "~/styles/user-gallery-items.css";
import { useRef } from "react";
import UserGalleryItem from "~/components/main/UserGalleryItem";
import { Button } from "flowbite-react";
import { ArrowRight } from "~/components/icons/flowbite/ArrowRight";

const items = [
  {
    nickname: "Nickname0",
    title: "Title0",
    image: "/images/cat.jpg",
    url: "/face"
  },
  {
    nickname: "Nickname1",
    title: "Title1",
    image: "/images/cat.jpg",
    url: "/face"
  },
  {
    nickname: "Nickname2",
    title: "Title2",
    image: "/images/cat.jpg",
    url: "/face"
  },
  {
    nickname: "Nickname3",
    title: "Title3",
    image: "/images/cat.jpg",
    url: "/face"
  },
  {
    nickname: "Nickname4",
    title: "Title4",
    image: "/images/cat.jpg",
    url: "/face"
  },
];

export default function UserGalleryItems() {
  const sliderRef = useRef<Slider>(null);

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    // variableWidth: true,
    slidesToScroll: 1,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  };

  const moveItem = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  }

  return (
    <div>
      <Button pill size="xl" color="light" className="ml-auto border-black border-2 mb-5 -mt-7 hidden lg:block">
        <p className="">SEE ALL</p>
        <span className="ml-2 inline-flex items-center justify-center ">
               <ArrowRight className="w-5 h-5" />
          </span>
      </Button>
      <Slider
        ref={sliderRef}
        {...setting}
        className={'user-gallery-items'}
      >
        {items.map((item, index) => (
          <UserGalleryItem key={index} {...item} />
        ))}
      </Slider>
      <div className={'flex lg:hidden gap-x-4 my-4'}>
        {items.map((item, index) => (
          <div key={index} className={'cursor-pointer'} onClick={()=>moveItem(index)}>
            <img src={item.image} alt={item.title} className={"rounded-lg"} />
          </div>
        ))}
      </div>

      <Button pill size="sm" color="light" className="ml-auto border-black mb-5 lg:hidden">
        <p className="">SEE ALL</p>
        <span className="ml-2 inline-flex items-center justify-center ">
               <ArrowRight className="w-3 h-3" />
          </span>
      </Button>
    </div>
  );
}

