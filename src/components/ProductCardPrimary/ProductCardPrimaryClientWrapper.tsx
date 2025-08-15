"use client";
import { TProduct } from "@/data/products";
import { LayoutGrid, Send, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui";

const ProductCardPrimaryClientWrapper = ({ product }: { product: TProduct }) => {
  const router = useRouter();

  const handleCLAClick = () => {
    if (product?.variations?.length) {
      router.push(`/products/${product?.slug}`);
      return;
    }
    toast.success("Added to cart successfully");
    // add to cart and redirect to product
    router.push(`/products/${product?.slug}`);
  };

  return (
    <div className="flex gap-2 w-full items-center">
      <Button
        className="flex-1 min-w-0 rounded-full"
        variant={"secondary"}
        onClick={handleCLAClick}
      >
        {product?.variations?.length ? (
          <>
            <LayoutGrid /> <span className="hidden sm:block">View option</span>
          </>
        ) : (
          <>
            <ShoppingBag /> <span className="hidden sm:block">Add to cart</span>
          </>
        )}
      </Button>

      <Link href={`/products/${product?.slug}`}>
        <Button className="rounded-full size-9">
          <Send />
        </Button>
      </Link>
    </div>
  );
};

export default ProductCardPrimaryClientWrapper;
