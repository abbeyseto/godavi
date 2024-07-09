import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { client } from "../../../../../sanity/lib/client";

// Define a function to handle the GET request
export async function GET(request: any) {
  console.log(request.url);
  const category_id  = request.url.split('/').pop();

  // Construct the GROQ query
  const queryCategory = groq`
    *[_type == 'product' && category->slug.current == '${category_id}']{
        _id,
        body[]{
          children[]{
            text
          }
        },
        brand->{
          _id,
          title,
        },
        description,
        price,
        _type,
        title,
        _updatedAt,
        images,
        category->{
          _id,
          title,
        },
        _createdAt,
        tags,
        slug
    }
  `;

  const queryAll = groq`
    *[_type == 'product']{
        _id,
        body[]{
          children[]{
            text
          }
        },
        brand->{
          _id,
          title,
        },
        description,
        price,
        _type,
        title,
        _updatedAt,
        images,
        category->{
          _id,
          title,
        },
        _createdAt,
        tags,
        slug
    }
  `;
  // Fetch the products from Sanity
  const products = category_id === 'all'? await client.fetch(queryAll): await client.fetch(queryCategory);
  // console.log(products);
  // Return the products as a JSON response
  return NextResponse.json({ products });
}
