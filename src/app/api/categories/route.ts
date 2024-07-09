import { NextRequest, NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Category } from "@/lib/typings";

// Fetch content with GROQ
const query = groq`
  *[_type == "category"] {
    ...,
    "imageUrl": image.asset->url
  }
`;

export async function GET() {
  const categories: Category[] = await client.fetch(query);
  // console.log(categories);
  return NextResponse.json({ categories });
}
