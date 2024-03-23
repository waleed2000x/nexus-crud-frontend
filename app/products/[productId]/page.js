import { Button } from "@/components/ui/button";
import { DeleteRequest, GetRequest } from "@/utils/requests";
import React from "react";

export default async function Product({ params: { productId } }) {
  console.log(productId);
  const productsData = await GetRequest(
    `http://localhost:8000/products/${productId}`
  );
  // const product = productsData?.data?.product;
  console.log(productsData);
  // const deleteProduct = () => {
  // const Delete = DeleteRequest(`http://localhost:8000/products/${productId}`);
  // };
  return (
    <div className="product-parent">
      <div className="one-product">
        {/* <p>{product.image}</p> */}
        {/* <p>{product.name}</p> */}
        {/* <p>{product.detail}</p> */}
        {/* <p>{product.price}</p> */}
        {/* <Button variant="outline" onClick={deleteProduct}> */}
        {/* Delete */}
        {/* </Button> */}
      </div>
    </div>
  );
}
