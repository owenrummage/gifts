import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  data: any[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.status(200).json({
    message: "Successfully got all categories",
    data: ["Technology", "Tools", "Other", "Clothing"],
  });
}
