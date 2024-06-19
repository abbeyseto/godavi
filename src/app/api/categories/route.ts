import { NextRequest, NextResponse } from 'next/server';
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Category } from "@/lib/typings";

// Fetch content with GROQ
const query = groq`
  *[_type == "category"] {
    ...
  }
`;

export async function GET() {
  const categories: Category[] = await client.fetch(query);
  return NextResponse.json({ categories });
}
