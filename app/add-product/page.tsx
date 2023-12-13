import React from "react";
import axios from "axios";
import { revalidatePath } from "next/cache";
import AddProduct from "../components/AddProduct";

async function createProduct(formData: FormData) {
  "use server";

  try {
    const url = `${process.env.BASE_URL}/products`;

    const response = await axios.post(url, {
      name: formData.get("name"),
      description: formData.get("description"),
      image: formData.get("image"),
      price: Number(formData.get("price")),
    });
    if (response.status === 201) {
      revalidatePath("/");
      return;
    }
  } catch (e) {
    console.log("ERRRRORRRR", e);
  }

  return null;
}

const page = () => {
  return (
    <div>
      <AddProduct action={createProduct} />
    </div>
  );
};

export default page;
