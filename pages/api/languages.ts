// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { languages } from "@/data/languages";
import type { NextApiRequest, NextApiResponse } from "next";
import { TOKENS } from "./auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, headers } = req;

  if (method !== "GET") return res.status(405).json("Method Not Allowed");

  const { authorization } = headers;

  const isAuthorized =
    !!authorization && authorization === `Bearer ${TOKENS.ACCESS}`;

  if (!isAuthorized) return res.status(401).json("Unauthorized");

  return res.status(200).json({ count: languages.length, results: languages });
}
