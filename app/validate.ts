import z from "zod";

const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z.string(),
  price: z.number().int(),
  quantity: z.number().int().optional(),
});

const productSchemaPartial = productSchema.partial();

export type Product = z.infer<typeof productSchema>;

export const validateProduct = (data: Product) => {
  return productSchema.safeParse(data);
};

export const validateProductPartial = (data: Product) => {
  return productSchemaPartial.safeParse(data);
};
