import Card from "../components/Card";

const page = async ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="p-20">Your Item</h1>
    </div>
  );
};

export default page;
