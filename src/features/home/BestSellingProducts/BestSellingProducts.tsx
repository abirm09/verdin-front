import { Container, ProductCardPrimary, Subtitle, Title } from "@/components";
import { fakeProduct } from "@/data/products";

const BestSellingProducts = () => {
  return (
    <section className="pt-10 md:pt-20">
      <Container>
        <Title className="text-center">Best selling products</Title>
        <Subtitle className="text-center">Check out our most popular picks</Subtitle>
        {/* Product lists */}

        <div className="flex gap-x-2 gap-y-5 sm:gap-y-5 flex-wrap justify-center sm:justify-between mt-5 sm:mt-10">
          {fakeProduct?.slice(0, 4)?.map((product) => (
            <ProductCardPrimary key={product?.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BestSellingProducts;
