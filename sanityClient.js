import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'g5y1wl9p',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-06-12',
});