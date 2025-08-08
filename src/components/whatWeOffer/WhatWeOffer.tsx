import { Container } from "@/components";
import { TPageSectionContent } from "@/types";

import WhatWeOfferClientWrapper from "./WhatWeOfferClientWrapper";

const whatWeeOfferData: TPageSectionContent[] = [
  {
    id: "1",
    type: "what_we_offer",
    title: "Fast Delivery",
    image: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754645556/delivery-bike_zhvfk3.png",
    subtitle: "Get your orders delivered in record time.",
  },
  {
    id: "2",
    type: "what_we_offer",
    title: "Hassle-Free Returns",
    image: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754645557/cashback_gboimp.png",
    subtitle: "Easily return products and receive refund.",
  },
  {
    id: "3",
    type: "what_we_offer",
    title: "Coupons",
    image:
      "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754645557/discount-voucher_ohmciv.png",
    subtitle: "We offers exclusive discounts.",
  },
  {
    id: "4",
    type: "what_we_offer",
    title: "Warranty Claim",
    image: "https://res.cloudinary.com/djb6gdw6k/image/upload/v1754645556/warranty_xf897v.png",
    subtitle: "Easily claim warranty for your products.",
  },
];

const WhatWeOffer = () => {
  return (
    <section>
      <Container>
        <WhatWeOfferClientWrapper whatWeeOfferData={whatWeeOfferData} />
      </Container>
    </section>
  );
};

export default WhatWeOffer;
