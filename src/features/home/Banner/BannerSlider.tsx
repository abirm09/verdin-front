"use client";

import { Badge, Button } from "@/components/ui";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TBanner } from "./Banner";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

const BannerSlider = ({ slides }: { slides: TBanner[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      // Immediately trigger animations
      setCurrent(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <>
      <div className="h-full flex items-center overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides?.map((slide, index) => {
            const isActive = index === current;
            return (
              <div
                key={index}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 justify-start md:justify-between items-center p-5 flex-1"
              >
                {/* Text block: left-aligned on small, keep order after image on small */}
                <div className="space-y-1 order-2 md:order-1 text-left w-full">
                  {slide?.discount && (
                    <motion.div
                      variants={fadeUp}
                      initial="initial"
                      animate={isActive ? "animate" : "initial"}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="text-xl md:text-4xl font-bold text-left"
                    >
                      <Badge variant={"destructive"} className="animate-bounce">
                        {slide?.discount}
                      </Badge>
                    </motion.div>
                  )}

                  <motion.h2
                    variants={fadeUp}
                    initial="initial"
                    animate={isActive ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="text-xl md:text-4xl font-bold text-left"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    initial="initial"
                    animate={isActive ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-xs font-semibold block md:text-base text-muted-foreground text-left"
                  >
                    {slide.short_description}
                  </motion.p>
                  <motion.h2
                    variants={fadeUp}
                    initial="initial"
                    animate={isActive ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="md:text-4xl font-bold text-left"
                  >
                    <Link
                      href={slide?.cta_btn_url || `/products/${slide.product?.slug}`}
                      className="block"
                    >
                      <Button>{slide?.cta_btn_text}</Button>
                    </Link>
                  </motion.h2>
                </div>

                {/* Image: centered on small, right on md+ */}
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  animate={isActive ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex justify-center md:justify-end order-1 md:order-2 w-full"
                >
                  <Image
                    src={slide.product?.thumb}
                    alt={slide.title || "Slide image"}
                    height={250}
                    width={250}
                    className="w-40 h-40 md:w-[250px] md:h-[250px]"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
