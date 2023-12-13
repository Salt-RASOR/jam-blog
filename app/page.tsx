
import Card from "./components/Card";
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios(`${process.env.BASE_URL}/products`);

  return res.data;
};

export default async function Home() {
  const products = await fetchProducts();
  return (
    <ul className="flex flex-wrap items-center justify-center">
      {products.map((product) => {
        return (
          <li key={(product.id + "li") as string}>
            <Card
              key={product.id as string}
              name={product.name as string}
              description={product.description as string}
              price={product.price as number}
              url={product.image}
              quantity={product.quantity}
              id={product.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

export const dynamic = "force-dynamic";
