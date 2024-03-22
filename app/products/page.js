import "./products.css";
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

export default async function Products() {
  const productsData = await GetRequest("http://localhost:8000/products/");
  const allproducts = productsData?.data?.allProducts;
  //   console.log(allproducts);
  return (
    <div className="products-parent">
      <p>Products</p>
      <div className="all-products">
        {allproducts &&
          allproducts.map((product) => {
            {
              /* <div className="product">
                <p>Image: {product.image}</p>
              </div> */
            }
            return (
              <Card key={product._id}>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Details: {product.detail}</p>
                  <p>Price: {product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">
                    <Link href={`/products/${product._id}`}>More Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
