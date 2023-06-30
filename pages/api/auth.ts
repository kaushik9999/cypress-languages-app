import type { NextApiRequest, NextApiResponse } from "next";

const CREDENTIALS = {
  EMAIL: "test@guildhawk.com",
  PASSWORD: "password",
};

export const TOKENS = {
  ACCESS: "dc484f3a-05fc-11ee-be56-0242ac120002",
  REFRESH: "e0ece7b2-05fc-11ee-be56-0242ac120002",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  if (method !== "POST") return res.status(405).json("Method Not Allowed");

  const { email, password } = body;

  const hasEmailAndPasswordAndEmailAndPasswordMatch =
    !!email &&
    !!password &&
    email === CREDENTIALS.EMAIL &&
    password === CREDENTIALS.PASSWORD;

  if (!hasEmailAndPasswordAndEmailAndPasswordMatch)
    return res.status(401).json("Unauthorized");

  const response = {
    access: TOKENS.ACCESS,
    refresh: TOKENS.REFRESH,
  };

  return res.status(200).json(response);
}
