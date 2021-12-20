// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { asyncFunction } from "../../../db/mysql";

export default async function handler(req, res) {
  const { body, query } = req;

  if (req.method === "POST") {
    const { id, name, desc } = body;
    const data = await asyncFunction(
      "insert into exercise(name, description, category_id) values(?,?,?)",
      [name, desc, id]
    );
    return res.status(200).json(data);
  }

  if (req.method === "DELETE") {
    const { num } = query;
    const data = await asyncFunction(`delete from exercise where num=${num}`);
    return res.status(200).json(data);
  }

  if (req.method === "PATCH") {
    const { id, name, desc } = body;
    const data = await asyncFunction(
      `update exercise set name='${name}', description='${desc} where category_id=${id}`
    );
    return res.status(200).json(data);
  }
}
