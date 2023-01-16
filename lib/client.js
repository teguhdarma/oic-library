import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { createClient, createPreviewSubscriptionHook } from 'next-sanity';
export const client = sanityClient({
  projectId: '9gldm4wh',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
