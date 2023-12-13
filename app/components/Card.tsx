import React from "react";
import Link from "next/link";
import Image from "next/image";

type CardProps = {
  name: string;
  description: string;
  price: number;
  id: string;
  quantity: number;
  url: string;
};
const Card: React.FC<CardProps> = ({
  name,
  description,
  price,
  id,
  quantity,
  url,
}) => {
  return (
    <>
      <Link
        href={"/" + id}
        className="block overflow-hidden max-w-sm h-[550px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center pb-12">
          {name}
        </h5>

        <p className="font-normal text-gray-700 dark:text-gray-400 ">
          {description}
        </p>
        <p className="font-bold py-4 text-right text-green-500"> {price} SEK</p>
        <p className="py-4 italic">Left only {quantity} st</p>
        <Image src={url} alt={description} width={500} height={400} />
      </Link>
    </>
  );
};

export default Card;
