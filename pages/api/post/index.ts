import type { NextApiRequest, NextApiResponse } from "next";

import { allPostsQuery } from "../../../utils/queries";
import { client } from "../../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const query = allPostsQuery();

      const data = await client.fetch(query);

      return res.status(200).json(data);
    } else if (req.method === "POST") {
      const doc = await req.body;
      console.log(doc);

      console.log("_______triggered_______");

      await client.create(doc);
      console.log("log from api/post/index return");
      return res.status(200).json("video created");
    }
  } catch (error: unknown) {
    if (error instanceof Error) return console.error({ apiPostError: error });
    return res.status(409).json(error);
  }
}
