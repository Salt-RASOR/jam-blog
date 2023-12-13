import prisma from "@/app/client";
import { validateProduct } from "@/app/validate";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const data = await prisma.product.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const validate = validateProduct(body);
    if (!validate.success) {
      return NextResponse.json(
        { error: validate.error.issues },
        { status: 400 }
      );
    }

    const data = await prisma.product.create({ data: body });
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
