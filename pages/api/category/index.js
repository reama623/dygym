// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { asyncFunction } from "../../../db/mariadb";

export default async function handler(req, res) {
  const { body } = req;
  if (req.method === "GET") {
    const data = await asyncFunction("select * from category");
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { name, desc } = body;
    const data = await asyncFunction(
      "insert into category(name, description) values(?,?)",
      [name, desc]
    );
    return res.status(200).json(data);
  }
}
