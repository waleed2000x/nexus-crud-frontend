import { GetRequest } from "@/utils/requests";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Products() {
  const productsData = await GetRequest("http://localhost:8000/products/");
  const allproducts = productsData?.data?.allProducts;
  return (
    <div className="products-parent">
      <p>Products</p>
      <div className="all-products">
        {allproducts &&
          allproducts.map((product) => {
            return (
              <Card className="all-products-card" key={product._id}>
                <CardHeader>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded my-[15px]"
                  />
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.detail}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Details: {product.detail}</p>
                  <p>Price: {product.price}</p>
                </CardContent>
                <CardFooter className="all-products-card-footer">
                  <Link href={`/products/${product._id}`}>
                    <Button variant="outline">More Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
