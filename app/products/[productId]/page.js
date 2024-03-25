import { GetRequest } from "@/utils/requests";
import DeleteDialog from "./DeleteDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Product({ params: { productId } }) {
  const productsData = await GetRequest(
    `http://localhost:8000/products/${productId}`
  );
  const product = productsData?.data?.product;
  console.log(product);

  return (
    <div className="product-parent">
      <div className="one-product">
        <Card>
          <img
            src={product.image}
            alt={product.name}
            className="rounded m-3 w-[330px] h-[300px] object-cover"
          />
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{product.detail}</CardDescription>
            <p className="mt-[15px]">Price: {product.price}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link className="mt-3" href={`/products/${product._id}/update`}>
              <Button>Update</Button>
            </Link>
            <DeleteDialog id={productId} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
