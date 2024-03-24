import { GetRequest } from "@/utils/requests";
import DeleteDialog from "./DeleteDialog";

export default async function Product({ params: { productId } }) {
  const productsData = await GetRequest(
    `http://localhost:8000/products/${productId}`
  );
  const product = productsData?.data?.product;
  console.log(product);

  return (
    <div className="product-parent">
      <div className="one-product">
        <p>{product.image}</p>
        <p>{product.name}</p>
        <p>{product.detail}</p>
        <p>{product.price}</p>
        <DeleteDialog id={productId} />
      </div>
    </div>
  );
}
