import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "~/styles/use-case-items.css";
import ToolItem from "~/components/main/ToolItem";

const items = [
  {
    title: "MY MINI META",
    description: "여기에 간단한 툴의 기능이 소개 됩니다. 여기에 간단한 툴의 기능이 소개 됩니다. 여기에 간단한 툴의 기능이 소개 됩니다. ",
    image: "/images/tool-1.jpg",
    icon: "/images/atom.svg",
    url: "/face"
  },
  {
    title: "IMG2 IMG GENERATOR",
    description: "여기에 간단한 툴의 기능이 소개 됩니다. 여기에 간단한 툴의 기능이 소개 됩니다. 여기에 간단한 툴의 기능이 소개 됩니다. ",
    image: "/images/tool-2.jpg",
    icon: "/images/wand-magic-sparkles.svg",
    url: "/face"
  },
  {
    title: "MY MINI PET",
    description: "여기에 간단한 툴의 기능이 소개 됩니다. 여기에 간단한 툴의 기능이 소개 됩니다. 여기에 간단한 툴의 기능이 소개 됩니다. ",
    image: "/images/tool-3.jpg",
    icon: "/images/cat.svg",
    url: "/face"
  }
];

export default function ToolItems() {
  return (
    <div className="flex flex-col gap-y-12">
      {items.map((item, index) => (
        <ToolItem {...item} key={index} />
      ))}
    </div>
  );
}

