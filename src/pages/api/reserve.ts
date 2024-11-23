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
  if (!req.body.id)
    return res
      .status(400)
      .json({ message: "Please provide an ID to reserve!", data: [] });
  if (!req.body.name)
    return res.status(400).json({
      message: "Please provide an name of whos reserving it!",
      data: [],
    });

  let foundGift = await client.gift.findFirst({
    where: {
      id: req.body.id,
    },
  });

  if (!foundGift)
    return res.status(404).json({
      message: "Gift not found!",
      data: [],
    });

  if (foundGift?.reservedBy != "")
    return res.status(400).json({
      message: "Gift has already been reserved!",
      data: [],
    });

  let gift = await client.gift.update({
    where: {
      id: req.body.id,
    },
    data: {
      reservedBy: req.body.name,
    },
  });

  res
    .status(200)
    .json({ message: "Successfully updated reservation!", data: [gift] });
}
