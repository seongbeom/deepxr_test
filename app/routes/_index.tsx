import type { V2_MetaFunction } from "@remix-run/node";
import { Button, Card } from "flowbite-react";
import Jumbotron from "~/components/Jumbotron";
import { Link } from "@remix-run/react";
import { HiOutlineArrowRight } from "react-icons/hi";
import ImgCat from "~/assets/images/cat.jpg";
import ImgTool1 from "~/assets/images/tool-1.jpg";
import ImgTool2 from "~/assets/images/tool-2.jpg";
import ImgTool3 from "~/assets/images/tool-3.jpg";

export const meta: V2_MetaFunction = () => [{ title: "DeepXRLab" }];

export default function Index() {
  return (
    <div>
      <Jumbotron />
      <div className="container mx-auto px-4 lg:px-20">
        <p className="text-[40px] font-semibold mb-12 mt-28 text-black  dark:text-white text-center">USE-CASES</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link to="/">
            <img src={ImgCat} className="rounded-lg" />
          </Link>
          <Link to="/">
            <img src={ImgCat} className="rounded-lg" />
          </Link>
          <Link to="/">
            <img src={ImgCat} className="rounded-lg" />
          </Link>
        </div>
        <p className="text-[40px] font-semibold mb-12 mt-28 text-black dark:text-white text-center">
          <p>USER GALLERY</p>
          <Button outline size="xs" color="gray" className="ml-auto border-green-700">
            <p  className="text-green-700 dark:text-white">See All</p>
            <span className="ml-2 inline-flex items-center justify-center ">
                <HiOutlineArrowRight className="w-3 h-3 text-green-700 dark:text-white" />
            </span>
          </Button>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg"
                   src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
            </div>
          </div>
        </div>

        <p className="text-[40px] font-semibold mb-12 mt-28 text-black  dark:text-white text-center">
          ALL TOOLS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-5">
          <Card
            imgAlt="My Mini Meta"
            imgSrc={ImgTool1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                My Mini Meta
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                여기에 간단한 툴의 기능이 소개 됩니다.
              </p>
            </p>
            <Button className="w-fit whitespace-nowrap" color="primary">
              <p>
                Read more
              </p>
              <HiOutlineArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
          <Card
            imgAlt="Img2Img Generator"
            imgSrc={ImgTool2}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                Img2Img Generator
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                여기에 간단한 툴의 기능이 소개 됩니다.
              </p>
            </p>
            <Button className="w-fit whitespace-nowrap" color="primary">
              <p>
                Read more
              </p>
              <HiOutlineArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
          <Card
            imgAlt="My Mini Meta"
            imgSrc={ImgTool3}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                My Mini Meta
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                여기에 간단한 툴의 기능이 소개 됩니다.
              </p>
            </p>
            <Button className="w-fit whitespace-nowrap" color="primary">
              <p>
                Read more
              </p>
              <HiOutlineArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>

      </div>


    </div>
  );
}
