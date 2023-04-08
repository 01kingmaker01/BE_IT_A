import sanityClient from "@sanity/client";

// console.log({ token: `'${process.env.NEXT_PUBLIC_SANITY_TOKEN}'` });

export const client = sanityClient({
  projectId: "f89k4t1n",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
