import client from "../client";
import Card from "../components/Card";

const page = async ({ params }: { params: { id: string } }) => {
  const data = (await client.getEntry(params.id)).fields;


  return (
    <div className="flex items-center flex-col">
      <h1 className="p-20">Your Item</h1>
      <Card
        name={data.name as string}
        description={data.description as string}
        id=""
        price={data.price as number}
      />
    </div>
  );
};

export default page;
