import { NextRequest, NextResponse } from "next/server";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Product } from "@/lib/typings";

export async function GET() {
  // Fetch content with GROQ
  const query = groq`
*[_type == "product"] {
    _id,
    title,
    description,
    images[],
    price,
    featured,
}
`;
  const products: Product[] = await client.fetch(
    query,
    {},
    { next: { revalidate: 30 } }
  );
  return NextResponse.json({ products });
}
