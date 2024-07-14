import Algolia from "@/components/products/algolia";
import ProductTag from "@/components/products/product-tags";
import Products from "@/components/products/products";
import { db } from "@/server";

export const revalidate = 60 * 60;

export default async function Home() {
  // ye All Products ko jo hamne banaya hai usko Home Page me Show Karega
  const data = await db.query.productVariants.findMany({
    with: {
      variantImages: true,
      variantTags: true,
      product: true,
    },
    orderBy: (productVariants, { desc }) => [desc(productVariants.id)],
  });

  return (
    <main>
      <Algolia />
      <ProductTag />

      {/* Show All Products in Home Page */}
      <Products variants={data} />
    </main>
  );
}
