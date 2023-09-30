import Share from "~/assets/images/share.svg";
import Delete from "~/assets/images/delete.svg";

import React from "react";
import { CalendarMonth } from "~/components/icons/flowbite/CalendarMonth";

type Props = {
  index: number;
}
export default function MyGalleryItem({index}: Props) {
  return (
    <div>
      <div className={'font-semibold text-[24px] mb-2'}>{(index+'').padStart(2,'0')}.</div>
      <div className={'relative'}>
        <img src={'/images/cat.jpg'} alt={'cat'} className={"rounded-lg"} />
      </div>
      <div className={'flex justify-between items-center mt-3'}>
        <span className={'inline-flex items-center'}><CalendarMonth className={'mr-1 text-xr-black w-4 h-4'}/>10/01/2023</span>
        <div className={'inline-flex items-center gap-x-3'}>
          <span className={'inline-flex items-center'}><img src={Share} className={'mr-1'}/> Share</span>
          <span className={'inline-flex items-center'}><img src={Delete}  className={'mr-1'}/> Delete</span>
        </div>
      </div>
    </div>
  );
}
