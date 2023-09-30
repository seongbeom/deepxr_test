import React from "react";
import { Heart } from "~/components/icons/Heart";
import { ArrowRight } from "~/components/icons/flowbite/ArrowRight";
import { Link } from "@remix-run/react";

type Props = {
  nickname: string
  image: string;
  title: string;
  url: string;
}

export default function UserGalleryItem({nickname, image, title, url}: Props) {
  return (
    <div className={"rounded-lg"}>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className={"bg-xr-primary rounded-lg -mt-3 z-10 relative p-[15px]"}>
        <div className={"mb-[60px]"}>
          <span className={"text-2xl font-bold "}>{nickname}</span>
          <Link to={url} className={'float-right p-[14px]'}>
            <ArrowRight className={'w-4'}/>
          </Link>
        </div>

        <div className={'flex justify-between items-center'}>
          <div className={'inline-flex items-center'}>
            <Heart />
            <span className={'font-semibold ml-2'}>100 Likes</span>
          </div>
          <span>10/10/2023</span>
        </div>
      </div>
    </div>
  );
}
