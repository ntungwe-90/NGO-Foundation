import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-12-01',
});

export const urlFor = (source: any) => {
  return sanityClient.image(source);
};