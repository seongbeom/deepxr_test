import type { V2_MetaFunction } from "@remix-run/node";
import { Camera } from "~/components/icons/Camera";
import { Photograph } from "~/components/icons/Photograph";
import IconUpload from "~/assets/images/upload.svg";
import { Button } from "flowbite-react";

export const meta: V2_MetaFunction = () => [{ title: "Face" }];

export default function Index() {
  return (
    <div className="pt-24">
      <h1 className="text-[40px] font-bold text-center text-black dark:text-white">
        Deep Toy
      </h1>
      <div className="max-w-3xl mx-4 md:mx-auto">
        <div
          className="flex flex-col justify-center items-center aspect-video rounded-lg bg-gray-50 border-2 border-gray-200 border-dashed my-8"
        >
          <div
            className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[7px]"
          >
            <img src={IconUpload} />
            <p className="flex-grow-0 flex-shrink-0 text-sm text-center text-gray-500">
      <span className="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-gray-500"
      >설명영역</span
      ><span className="flex-grow-0 flex-shrink-0 text-sm text-center text-gray-500">
        (이미지 조건)</span
            >
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <Button color="primary" size="xl">
            {/*<img src={IconCamera} className="mr-2" />*/}
            <Camera className="dark:fill-black mr-2"/>
            카메라 촬영
          </Button>
          <Button color="primary" size="xl">
            <Photograph className="dark:fill-black mr-2"/>
            사진 업로드
          </Button>
        </div>
      </div>
    </div>
  );
}
