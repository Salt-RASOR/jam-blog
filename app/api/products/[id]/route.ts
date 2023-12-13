import prisma from "@/app/client";
import { NextResponse } from "next/server";
import { validateProductPartial } from "@/app/validate";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = Number(params.id);
    const data = await prisma.product.findUnique({ where: { id } });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = Number(params.id);

    const body = await req.json();

    const validate = validateProductPartial(body);
    if (!validate.success) {
      return NextResponse.json(
        { error: validate.error.issues },
        { status: 400 }
      );
    }

    const data = await prisma.product.update({ where: { id }, data: body });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
