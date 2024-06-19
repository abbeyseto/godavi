import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      type: "document",
      name: "product",
      fields: [
        {
          type: "string",
          name: "title",
        },
        {
          type: "slug",
          name: "slug",
          options: {
            source: "title",
          },
        },
        {
          type: "text",
          name: "description",
        },
        {
          type: "array",
          name: "body",
          title: "Main content",
          of: [
            {
              type: "block",
            },
          ],
        },
        {
          type: "number",
          name: "price",
        },
        {
          type: "array",
          name: "images",
          of: [
            {
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
        {
          type: "array",
          name: "tags",
          of: [
            {
              type: "string",
            },
          ],
        },
        {
          type: "reference",
          name: "category",
          to: [
            {
              type: "category",
            },
          ],
        },
      ],
    },
    {
      type: "document",
      name: "category",
      fields: [
        {
          type: "string",
          name: "title",
        },
        {
          type: "slug",
          name: "slug",
        },
        {
          type: "text",
          name: "description",
        },
      ],
    },
    {
      type: "document",
      name: "order",
      fields: [
        {
          type: "array",
          name: "products",
          of: [
            {
              type: "reference",
              to: [
                {
                  type: "product",
                },
              ],
            },
          ],
        },
        {
          type: "number",
          name: "total",
        },
        {
          type: "reference",
          name: "user",
          to: [
            {
              type: "user",
            },
          ],
        },
      ],
    },
    {
      type: "document",
      name: "user",
      fields: [
        {
          type: "string",
          name: "name",
        },
        {
          type: "string",
          name: "email",
        },
        {
          type: "array",
          name: "orders",
          of: [
            {
              type: "reference",
              to: [
                {
                  type: "order",
                },
              ],
            },
          ],
        },
        {
          type: "array",
          name: "cart",
          of: [
            {
              type: "reference",
              to: [
                {
                  type: "product",
                },
              ],
            },
          ],
        },
        {
          type: "address",
          name: "address",
        },
      ],
    },
    {
      type: "object",
      name: "address",
      fields: [
        {
          type: "string",
          name: "street",
        },
        {
          type: "string",
          name: "city",
        },
        {
          type: "string",
          name: "zip",
        },
        {
          type: "string",
          name: "country",
        },
      ],
    },
  ],
};
