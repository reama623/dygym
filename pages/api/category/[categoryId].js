// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { asyncFunction } from "../../../db/mariadb";

export default async function handler(req, res) {
  // console.log(req);
  const { method, query, params } = req;
  console.log(query);
  const id = 1;
  if (method === "GET") {
    const data = await asyncFunction(
      `select * from exercise where category_id=${id}`
    );
    return res.status(200).json(data);
  }
}
