import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/mannschafts?filters[Dienststatus][$eq]=Jugend&populate=*&bearer=${process.env.NEXT_API_TOKEN}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}

export const config = {
    api: {
        bodyParser: false,
    },
}; 