import UseCaseItem from "~/components/main/UseCaseItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "~/styles/use-case-items.css";
import { ArrowLeft } from "~/components/icons/flowbite/ArrowLeft";
import { ArrowRight } from "~/components/icons/flowbite/ArrowRight";
import { useRef } from "react";

const items = [
  {
    title: "Title0",
    image: "/images/cat.jpg",
    url: "/face"
  },
  {
    title: "Title1",
    image: "/images/cat.jpg",
    url: "/face"
  },
  {
    title: "Title2",
    image: "/images/cat.jpg",
    url: "/face"
  },
  {
    title: "Title3",
    image: "/images/cat.jpg",
    url: "/face"
  },
  {
    title: "Title4",
    image: "/images/cat.jpg",
    url: "/face"
  }
];

export default function UseCaseItems() {
  const sliderRef = useRef<Slider>(null);

  // const setting = {
  //   dots: false,
  //   // infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   // centerMode: true,
  //   // initialSlide: 0.5,
  //   // slidesToShow: 3,
  //   // variableWidth: true,
  //   slidesToScroll: 1,
  //   // lazyLoad: true
  //   // centerMode: true,
  // };

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
          slidesToShow: 2,

        }
      }
    ]
  };

  // slick move left, right
  const slickPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const slickNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div>
      <div className={"justify-end mb-4 hidden lg:flex"}>
        <button className={"p-2"} onClick={slickPrev}>
          <ArrowLeft className="w-5 h-4 text-xr-black" />
        </button>
        <button className={"p-2 pr-0"} onClick={slickNext}>
          <ArrowRight className="w-5 h-4 text-xr-black" />
        </button>
      </div>

      <Slider
        ref={sliderRef}
        {...setting}
        className={"use-case-items"}
      >
        {items.map((item,index) => (
          <UseCaseItem key={index} {...item} />
        ))}
      </Slider>

    </div>
  );
}

