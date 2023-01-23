import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== "supersecret") {
    return res.status(401).json({ message: "Invalid secret" });
  }

  try {
    await res.revalidate("/demo/ssg");

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ revalidated: false });
  }
}
