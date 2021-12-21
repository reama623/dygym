// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../../core/api";

export default async function handler(req, res) {
  const { method, query } = req;
  const { categoryId } = query;
  if (method === "GET") {
    const { data } = await apiAxios().get(`/category/exercise/${categoryId}`);
    return res.status(200).json(data);
  }
}
