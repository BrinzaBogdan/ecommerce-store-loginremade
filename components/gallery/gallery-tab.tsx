import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab
      className={({ selected }) =>
        cn(
          "relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white",
          selected && "ring-2 ring-black ring-offset-2"
        )
      }
    >
      <div className="absolute inset-0 overflow-hidden rounded-md">
        <Image
          fill
          src={image.url}
          alt=""
          className="object-cover object-center"
        />
      </div>
    </Tab>
  );
};

export default GalleryTab;
