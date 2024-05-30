import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/fahrzeuges?filters[Fahrzeug_id][$eq]=${params.id}&populate=*&bearer=${process.env.NEXT_API_TOKEN}`
  );
  const data = await res.json();

  return NextResponse.json(data);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
