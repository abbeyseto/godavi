// Fetch the hero carousel data from Sanity
import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Hero } from "@/lib/typings";

export async function GET() {
  // Fetch content with GROQ
  const query = groq`
*[_type == "heroCarousel"]{
      _id,
      title,
      subtitle,
      "imageUrl": landscapeImage.asset->url,
      textPosition
    }
`;
  const hero: Hero[] = await client.fetch(
    query,
    {},
    { next: { revalidate: 30 } }
  );
  return NextResponse.json({ hero });
}
