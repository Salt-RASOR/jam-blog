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
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="w-50 h-40 relative">
          <Image src={url} alt={description} width={100} height={100} />
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p>{price} SEK</p>
        <p>{quantity} st</p>
      </Link>
    </>
  );
};

export default Card;
