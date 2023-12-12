import client from "./client";
import Card from "./components/Card";

export default async function Home() {
  const fetchProducts = async () => {
    const res = await client.getEntries();

    return res.items;
  };

  const products = await fetchProducts();

  return (
    <ul className="flex flex-wrap items-center justify-center">
      {products.map((product) => {
        return (
          <li key={(product.fields.id + "li") as string}>
            <Card
              key={product.fields.id as string}
              name={product.fields.name as string}
              description={product.fields.description as string}
              price={product.fields.price as number}
              id={product.sys.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

export const dynamic = "force-dynamic";
