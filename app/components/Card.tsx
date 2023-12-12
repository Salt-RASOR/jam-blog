import React from "react";
import Link from "next/link";

type CardProps = {
  name: string;
  description: string;
  price: number;
  id: string;
};
const Card: React.FC<CardProps> = ({ name, description, price, id }) => {
  return (
    <>
      <Link
        href={"/" + id}
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p>{price}</p>
      </Link>
    </>
  );
};

export default Card;
