import { Heart } from "~/components/icons/Heart";
import React from "react";
import { CalendarMonth } from "~/components/icons/flowbite/CalendarMonth";

type Props = {
  index: number;
}
export default function UserGalleryItem({index}: Props) {
  return (
    <div>
      <div className={'font-semibold text-[24px] mb-2'}>{(index+'').padStart(2,'0')}.</div>
      <div className={'relative'}>
        <button className={'absolute top-3 left-3 w-6 h-6'} >
          <Heart className={'text-xr-primary'}/>
        </button>
        <img src={'/images/cat.jpg'} alt={'cat'} className={"rounded-lg"} />
      </div>
      <div className={'flex justify-between items-center mt-3'}>
        <span className={'inline-flex items-center'}><CalendarMonth className={'mr-1 text-xr-black w-4 h-4'}/>10/01/2023</span>
        <span className={'inline-flex items-center'}><Heart className={'mr-1 w-4 h-4'}/> 100 Likes</span>
        <span className={'text-xr-primary'}>User Nickname</span>
      </div>
    </div>
  );
}
