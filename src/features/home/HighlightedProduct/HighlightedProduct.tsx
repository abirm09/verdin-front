import { Container, ProductCardPrimary, Subtitle } from "@/components";
import { Button, Card, CardContent } from "@/components/ui";
import { fakeProduct } from "@/data/products";
import flattenCategories from "@/lib/flatCategories";
import Image from "next/image";
import Link from "next/link";

const HighlightedProduct = () => {
  const highLightProduct1 = fakeProduct?.[5];
  const highLightProduct1Categories = flattenCategories(highLightProduct1?.categories);
  const highLightProduct2 = fakeProduct?.[7];
  return (
    <section className="pt-10 md:pt-20">
      <Container>
        <div className="space-y-2 md:space-y-0 md:flex gap-2">
          <Card className="flex-1 justify-center bg-muted">
            <CardContent className="px-2 md:px-5 grid items-center justify-between md:grid-cols-2">
              <div>
                <Image
                  src={highLightProduct1?.image?.url}
                  alt={highLightProduct1?.image?.alt}
                  width={400}
                  height={400}
                  className="w-60 aspect-square mx-auto"
                />
              </div>
              <div className="space-y-2">
                <div className="text-sm font-bold text-primary flex flex-wrap gap-0.5">
                  {highLightProduct1Categories?.map((category, idx) => (
                    <span key={category?.slug}>
                      <Link href={`/product-category/${category?.slug}`}>{category?.title}</Link>
                      {idx < highLightProduct1Categories.length - 1 && <span>, </span>}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-5xl font-bold">{highLightProduct1?.title}</h2>
                <Subtitle className="text-sm md:text-base">
                  {highLightProduct1?.short_description}
                </Subtitle>
                <Link href={`/products/${highLightProduct1?.slug}`}>
                  <Button>View details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center">
            <ProductCardPrimary className="w-[300px]" product={highLightProduct2} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HighlightedProduct;
