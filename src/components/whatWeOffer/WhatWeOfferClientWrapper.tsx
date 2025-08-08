"use client";
"use client";

import { Subtitle, Title } from "@/components";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui";
import { TPageSectionContent } from "@/types";
import Image from "next/image";

const WhatWeOfferClientWrapper = ({
  whatWeeOfferData,
}: {
  whatWeeOfferData: TPageSectionContent[];
}) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {whatWeeOfferData?.map((item) => (
          <CarouselItem key={item?.id} className="sm:basis-1/2 lg:basis-1/4">
            <div className="grid grid-cols-3 items-center gap-2 border border-border rounded-md p-3 h-[100px]">
              <div className="col-span-1">
                <Image
                  src={item?.image || "/images/placeholder.jpg"}
                  alt={item?.title}
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] mx-auto"
                />
              </div>
              <div className="col-span-2">
                <Title className="text-primary">{item?.title}</Title>
                <Subtitle>{item?.subtitle}</Subtitle>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default WhatWeOfferClientWrapper;
