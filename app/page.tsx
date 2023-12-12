import Image from "next/image";
import { createClient } from "contentful";
import Card from "./components/Card";

export default async function Home() {
  const client = createClient({
    space: process.env.SPACE as string,
    environment: "master",
    accessToken: process.env.ACCESS_TOKEN as string,
  });

  const fetchProducts = async () => {
    const res = await client.getEntry("1yxF12uNei57Sa5UUJO2sZ");

    return res.fields;
  };

  const products = await fetchProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <Card
            name={products.name as string}
            description={products.description as string}
            price={products.price as number}
          />
        </li>
      </ul>
    </main>
  );
}
