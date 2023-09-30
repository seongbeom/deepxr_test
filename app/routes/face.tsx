import type { V2_MetaFunction } from "@remix-run/node";
import { Camera } from "~/components/icons/Camera";
import { Photograph } from "~/components/icons/Photograph";
import IconUpload from "~/assets/images/upload.svg";
import { Button } from "flowbite-react";

export const meta: V2_MetaFunction = () => [{ title: "Face" }];

export default function Index() {
  return (
    <div className="container mx-auto px-4 mt-8">
      <h1 className="text-[40px] font-bold text-center text-xr-primary font-heavitas">
        MY MINI PET
      </h1>
      <div className={'flex flex-col my-4 max-w-3xl mx-auto'}>
        <div className={'flex flex-col items-center justify-center aspect-video border-xr-black border-2 rounded-lg '}>
          <img src={IconUpload} />
          <p className={'font-semibold my-2'}>Click to upload</p>
          <p className={'text-[12px]'}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:gap-5 my-4">
          <Button className={'bg-xr-primary whitespace-nowrap'} size="xl">
            {/*<img src={IconCamera} className="mr-2" />*/}
            <Camera className="dark:fill-black mr-2"/>
            카메라 촬영
          </Button>
          <Button className={'bg-xr-primary whitespace-nowrap'} size="xl">
            <Photograph className="dark:fill-black mr-2"/>
            사진 업로드
          </Button>
        </div>
        <div className={'py-4'}>
          <h3 className={'text-[24px] font-bold mb-2'}>설명 가이드</h3>
          <p>설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.설명가이드 영역입니다.</p>
        </div>
      </div>
    </div>
  );
}
