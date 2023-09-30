import type { V2_MetaFunction } from "@remix-run/node";
import UserGalleryItem from "~/components/gallery/UserGalleryItem";

export const meta: V2_MetaFunction = () => [{ title: "User Gallery" }];

export default function UserGallery() {
  return (
    <div className="container mx-auto px-4 lg:px-20 py-16">
      <h1 className={'font-heavitas text-[48px] mb-[48px]'}>USER GALLERY</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-2 gap-y-8 md:gap-5 md:gap-y-12 my-4">
        {[...Array(18)].map((_, i) => (
          <UserGalleryItem index={i+1} />
        ))}
      </div>
    </div>
  );
}
