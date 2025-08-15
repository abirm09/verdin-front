import { Container, ProductCardPrimary, Subtitle } from "@/components";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui";
import { fakeProduct } from "@/data/products";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";

const NewArrivals = () => {
  return (
    <section className="pt-10 md:pt-20">
      <Container>
        <SectionTitle className="text-center">New Arrivals</SectionTitle>
        <Subtitle className="text-center">
          Discover the latest trends and fresh picks just arrived in our collection.
        </Subtitle>
        {/* Product lists */}

        <div className="flex gap-x-2 gap-y-5 sm:gap-y-5 flex-wrap justify-center sm:justify-between mt-5 sm:mt-10">
          {fakeProduct?.slice(0, 8)?.map((product) => (
            <ProductCardPrimary key={product?.slug} product={product} />
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <Link href={`/shop`}>
            <Button>
              <LayoutGrid />
              View All
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;
