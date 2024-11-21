import { client } from "@/util/prisma";
import { Gift, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  data: Gift[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  let data = await client.gift.findMany();

  res.status(200).json({ message: "Successfully got all gifts!", data });
}
