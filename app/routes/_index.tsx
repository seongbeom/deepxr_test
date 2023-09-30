import type { V2_MetaFunction } from "@remix-run/node";
import Jumbotron from "~/components/Jumbotron";
import UseCaseItems from "~/components/main/UseCaseItems";
import Title from "~/components/main/Title";
import UserGalleryItems from "~/components/main/UserGalleryItems";
import ToolItems from "~/components/main/ToolItems";

export const meta: V2_MetaFunction = () => [{ title: "DeepXRLab" }];

export default function Index() {
  return (
    <div>
      <Jumbotron />
      <div className="container mx-auto px-4 lg:px-20 lg:mt-[133px] lg:mb-[40px]">
        <div className={'whitespace-nowrap text-center tracking-[5px] sm:tracking-[10px] 2xl:tracking-[10px] sm:text-[120px]  xl:text-[150px] 2xl:text-[188px] hidden lg:block text-xr-primary font-heavitas  -mt-[212px] xl:-mt-[231px] 2xl:-mt-[252px]'}>MY MINI PET</div>
        <Title>USE-CASES</Title>
        <UseCaseItems/>
        <Title>USER GALLERY</Title>
        <UserGalleryItems/>
        <Title>ALl TOOLS</Title>
        <ToolItems/>
      </div>
    </div>
  );
}
