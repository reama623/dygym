// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { asyncFunction } from "../../../../db/mariadb";

export default async function handler(req, res) {
  const { method, query, params, body } = req;
  const { categoryId } = query;
  if (method === "GET") {
    const data = await asyncFunction(
      `select * from exercise where category_id=${categoryId}`
    );
    return res.status(200).json(data);
  }

  if (method === "POST") {
    const { categoryId } = query;
    const { name, desc } = body;
    const data = await asyncFunction(
      `insert into exercise(name, description, category_id) values(?,?,?)`,
      [name, desc, categoryId]
    );
    return res.status(200).json(data);
  }
}
