import { createClient } from 'next-sanity'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'zq26d790',
  apiVersion: '2021-03-25',
  useCdn: false,
};

export const client = createClient(config)
