import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/fahrzeuges?sort[0]=sort_order&filters[Status][$eq]=Inaktiv&populate=*&bearer=${process.env.NEXT_API_TOKEN}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}

export const config = {
    api: {
        bodyParser: false,
    },
};