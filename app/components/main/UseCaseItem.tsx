import { Link } from "@remix-run/react";
import { ArrowRight } from "~/components/icons/flowbite/ArrowRight";

type Props = {
  image: string;
  title: string;
  url: string;
}
export default function UseCaseItem({ image, title, url }: Props) {
  return (
    <div >
      {/*<Link to={url}>*/}
      <img src={image} alt={title} className={"rounded-lg"} />
      {/* right arrow in circle*/}


      <Link to={url}
            className="flex rounded-full items-center justify-center bg-xr-primary mt-4 sm:ml-auto w-10 h-10">
        <ArrowRight className="w-4 h-3 text-white" />
      </Link>

    </div>
  );
}
