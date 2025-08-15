import { TProduct } from "@/data/products";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import flattenCategories from "@/lib/flatCategories";
import { Eye, GitCompare, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductCardPrimaryClientWrapper from "./ProductCardPrimaryClientWrapper";

const ProductCardPrimary = ({ product }: { product: TProduct }) => {
  const categories = flattenCategories(product?.categories);

  return (
    <>
      <Card className="relative w-[166px] sm:w-[300px] gap-2 py-3 group sm:overflow-hidden">
        <CardHeader>
          <Image
            src={product?.image?.url}
            alt={product?.image?.alt || ""}
            width={300}
            height={300}
          />
        </CardHeader>
        <CardContent className="px-2 md:px-5">
          <CardTitle className="space-y-2">
            <div className="text-xs font-bold text-primary flex flex-wrap gap-0.5">
              {categories?.map((category, idx) => (
                <span key={category?.slug}>
                  <Link href={`/product-category/${category?.slug}`}>{category?.title}</Link>
                  {idx < categories.length - 1 && <span>, </span>}
                </span>
              ))}
            </div>

            <p>{product?.title}</p>
          </CardTitle>
          <CardDescription>
            <p className="pt-1">
              {product?.discount_price ? (
                <>
                  <span className="text-xl font-bold text-primary">${product?.discount_price}</span>{" "}
                  <span className="line-through text-xs font-semibold text-muted-foreground">
                    ${product?.price}
                  </span>
                </>
              ) : (
                <span className="text-xl font-bold text-primary">${product?.price}</span>
              )}
            </p>
          </CardDescription>
        </CardContent>
        <CardFooter className="px-2 md:px-5 mt-auto">
          <ProductCardPrimaryClientWrapper product={product} />
        </CardFooter>
        {product?.highlight_text && (
          <Badge
            variant={"destructive"}
            className="absolute top-0.5 left-0.5 sm:top-3 sm:left-3 sm:animate-bounce"
          >
            {product?.highlight_text}
          </Badge>
        )}

        <div className="absolute sm:top-1/2 sm:-translate-y-1/2 right-1 group-hover:sm:right-2 sm:-right-10 bg-primary rounded-md flex flex-col transition-all duration-300">
          <Button variant={"product-card-side"} size={"sm"}>
            <Heart />
          </Button>
          <Button variant={"product-card-side"} size={"sm"}>
            <Eye />
          </Button>
          <Button variant={"product-card-side"} size={"sm"}>
            <GitCompare />
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ProductCardPrimary;
