// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { asyncFunction } from "../../../db/mysql";

export default async function handler(req, res) {
  const { body } = req;
  if (req.method === "GET") {
    // const data = await asyncFunction("select * from category");
    const data = await asyncFunction(
      `select c.num, c.name, count(e.category_id) as \`count\` from category c left join exercise e on e.category_id = c.num group by c.num`
    );
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

  if (req.method === "DELETE") {
    const { num } = query;
    const data = await asyncFunction(`delete from caetgory where num=${num}`);
    return res.status(200).json(data);
  }

  if (req.method === "PATCH") {
    const { name, desc } = body;
    const data = await asyncFunction(
      "insert into category(name, description) values(?,?)",
      [name, desc]
    );
    return res.status(200).json(data);
  }
}
