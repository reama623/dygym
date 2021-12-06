// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { asyncFunction } from "../../../db/mariadb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await asyncFunction("select * from category");
    return res.status(200).json(data);
  }
}
