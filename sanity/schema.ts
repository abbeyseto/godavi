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
    {
      name: "homepage",
      type: "document",
      title: "Homepage",
      fields: [
        {
          name: "heroSection",
          type: "object",
          title: "Hero Section",
          fields: [
            { name: "title", type: "string", title: "Title" },
            {
              name: "shortDescription",
              type: "text",
              title: "Short Description",
            },
            { name: "image", type: "image", title: "Image" },
            { name: "buttonText", type: "string", title: "Button Text" },
          ],
        },
        {
          name: "aboutSection",
          type: "object",
          title: "About Section",
          fields: [
            { name: "heading", type: "string", title: "Heading" },
            {
              name: "richTextDescription",
              type: "array",
              title: "Rich Text Description",
              of: [{ type: "block" }],
            },
            {
              name: "uniqueSellingPoints",
              type: "array",
              title: "Unique Selling Points",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "subheading", type: "string", title: "Subheading" },
                    { name: "text", type: "text", title: "Text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "ourServicesSection",
          type: "object",
          title: "Our Services Section",
          fields: [
            { name: "description", type: "text", title: "Description" },
            {
              name: "services",
              type: "array",
              title: "Services",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "subheading", type: "string", title: "Subheading" },
                    { name: "text", type: "text", title: "Text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "ourMissionSection",
          type: "object",
          title: "Our Mission Section",
          fields: [
            { name: "description", type: "text", title: "Description" },
            {
              name: "missionItems",
              type: "array",
              title: "Mission Items",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "subheading", type: "string", title: "Subheading" },
                    { name: "text", type: "text", title: "Text" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "contactSection",
          type: "object",
          title: "Contact Section",
          fields: [
            { name: "phoneNumber", type: "string", title: "Phone Number" },
            { name: "email", type: "string", title: "Email" },
            { name: "address", type: "text", title: "Address" },
            {
              name: "socialLinks",
              type: "array",
              title: "Social Links",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "platform", type: "string", title: "Platform" },
                    { name: "url", type: "url", title: "URL" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
