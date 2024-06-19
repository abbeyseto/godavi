import { NextRequest, NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Product } from "@/lib/typings";

// Fetch content with GROQ
const query = groq`
  *[_type == "product"] {
    ...
  }
`;

export async function GET() {
  const products: Product[] = await client.fetch(query);
  return NextResponse.json({ products });
}