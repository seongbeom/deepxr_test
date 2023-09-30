import { Button } from "flowbite-react";
import { ArrowRight } from "~/components/icons/flowbite/ArrowRight";

type Props = {
  icon: string;
  image: string;
  title: string;
  description: string;
  url: string;
}

export default function ToolItem({icon, image, title, description, url}: Props) {
  return (
    <div className={'flex flex-col xl:flex-row gap-x-8 lg:mt-12'}>
      <div>
        <img src={image} alt={title} className={'w-full rounded-lg asp aspect-[2/1]'}/>
      </div>
      <div className={'flex flex-col'}>
        <div className={'text-[24px] lg:text-[40px] flex font-semibold mt-6 my-2 items-center xl:mt-0'}>
          <img src={icon} className={'mr-2 lx:mr-4 max-lx:w-6 max-lx:h-6'}/>
          {title}
        </div>
        <div className={'text-xr-gray font-[14px]'}>{description}</div>
        <Button pill size="sm" color="light" className="xl:px-6 xl:py-3 flex w-fit border-black xl:border-2 my-4 items-center xl:mt-auto xl:mb-2">
          <p className="xl:text-[16px]">READ MORE</p>
          <span className="ml-2 inline-flex items-center justify-center ">
               <ArrowRight className="w-3 h-3 xl:w-5 xl:h-5" />
          </span>
        </Button>
      </div>
    </div>
  );
}
