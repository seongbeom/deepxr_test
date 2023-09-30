import type { V2_MetaFunction } from "@remix-run/node";
import MyGalleryItem from "~/components/gallery/MyGalleryItem";

export const meta: V2_MetaFunction = () => [{ title: "My Gallery" }];

export default function MyGallery() {
  return (
    <div className="container mx-auto px-4 lg:px-20 py-16">
      <h1 className={'font-heavitas text-[48px] mb-[48px]'}>MY GALLERY</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 gap-y-8 md:gap-5 md:gap-y-12 my-4">
        {[...Array(18)].map((_, i) => (
          <MyGalleryItem index={i+1} />
        ))}
      </div>
    </div>
  );
}
