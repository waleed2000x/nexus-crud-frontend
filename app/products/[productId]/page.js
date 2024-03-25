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
export default async function Product({ params: { productId } }) {
  const productsData = await GetRequest(
    `http://localhost:8000/products/${productId}`
  );
  const product = productsData?.data?.product;
  console.log(product);

  return (
    <div className="product-parent">
      <div className="one-product">
        <Card className="h-[100%]">
          <img src={product.image} alt={product.name} />
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.detail}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <p className="mt-[15px]">A: {product.price}</p>
            <DeleteDialog id={productId} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
