import { Container } from "@/components";
import { Badge, Button } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import BannerSlider from "./BannerSlider";

export type TBanner = {
  title: string;
  short_description?: string;
  cta_btn_text: string;
  cta_btn_url: string;
  type: string;
  discount?: string;
  product: {
    title: string;
    slug: string;
    thumb: string;
  };
};

const bannerDate: TBanner[] = [
  {
    title: "Grab your product",
    short_description: "Get upto 10% off in order!",
    cta_btn_text: "See details",
    type: "carousel",
    cta_btn_url: "/products/mac-book-pro",
    discount: "10% off",
    product: {
      title: "Mac book pro",
      slug: "mac-book-pro",
      thumb: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754628038/MacBook-Pro_tkwl97.png",
    },
  },
  {
    title: "Fresh vegetables",
    short_description: "Get upto 10% off in order!",
    cta_btn_text: "Buy now",
    cta_btn_url: "/products/mac-book-pro",
    type: "carousel",
    product: {
      title: "Fresh vegetables",
      slug: "fresh-vegetables",
      thumb:
        "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754628437/fresh-vegetables_edcloe.png",
    },
  },
  {
    title: "Seed planter",
    short_description: "Grow plants smartly",
    cta_btn_text: "See details",
    cta_btn_url: "/products/mac-book-pro",
    type: "side_product",
    product: {
      title: "Seed planter",
      slug: "seed-planter",
      thumb: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754628996/seed-pot_nqoent.png",
    },
  },
  {
    title: "Hand spade",
    short_description: "Must need for your garden",
    cta_btn_text: "Buy now",
    cta_btn_url: "/products/mac-book-pro",
    type: "side_product",
    discount: "10% off",
    product: {
      title: "Hand spade",
      slug: "hand-spade",
      thumb: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754629375/hand-spade_uwc4dv.png",
    },
  },
];

const Banner = () => {
  const slides = bannerDate.filter((item) => item.type === "carousel");
  const sideProducts = bannerDate.filter((item) => item.type === "side_product");
  const sidebarProduct1 = sideProducts?.[0] || null;
  const sidebarProduct2 = sideProducts?.[1] || null;
  return (
    <section>
      <Container className="py-4">
        <div className="grid grid-cols-3 gap-5">
          {/* Slider area */}
          <div className="col-span-3 md:col-span-2 bg-muted p-5 rounded-md h-[320px]">
            <BannerSlider slides={slides} />
          </div>

          {/* Highlighted products */}
          <div className="col-span-3 md:col-span-1 space-y-5">
            {sidebarProduct1 && (
              <div className="bg-muted h-[150px] p-5 rounded-md grid grid-cols-2 items-center">
                <div className="space-y-1">
                  <h2 className="font-bold text-xl">{sidebarProduct1?.title}</h2>
                  <p className="font-semibold text-xs">{sidebarProduct1?.short_description}</p>
                  <Link
                    href={
                      sidebarProduct1?.cta_btn_url || `/products/${sidebarProduct1?.product?.slug}`
                    }
                  >
                    <Button>{sidebarProduct1?.cta_btn_text}</Button>
                  </Link>
                </div>
                <div>
                  <Image
                    src={sidebarProduct1?.product?.thumb}
                    alt={sidebarProduct1?.product?.title}
                    width={110}
                    height={110}
                    className="ml-auto"
                  />
                </div>
              </div>
            )}

            {sidebarProduct2 && (
              <div className="bg-muted h-[150px] p-5 rounded-md grid grid-cols-2 items-center relative">
                <div className="space-y-1">
                  <h2 className="font-bold text-xl">{sidebarProduct2?.title}</h2>
                  <p className="font-semibold text-xs">{sidebarProduct2?.short_description}</p>
                  <Link
                    href={
                      sidebarProduct2?.cta_btn_url || `/products/${sidebarProduct2?.product?.slug}`
                    }
                  >
                    <Button>{sidebarProduct2?.cta_btn_text}</Button>
                  </Link>
                </div>
                <div>
                  <Image
                    src={sidebarProduct2?.product?.thumb}
                    alt={sidebarProduct2?.product?.title}
                    width={110}
                    height={110}
                    className="ml-auto"
                  />
                </div>
                {sidebarProduct2?.discount && (
                  <Badge
                    variant={"destructive"}
                    className="absolute -top-2 -right-2 animate-bounce"
                  >
                    {sidebarProduct2?.discount}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
