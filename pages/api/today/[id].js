// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../core/api";
// import { asyncFunction } from "../../../db/mysql";

export default async function handler(req, res) {
  const { body, query } = req;
  const { id } = query;
  if (req.method === "DELETE") {
    const { data } = await apiAxios().delete(`/t/exercises/${id}`);
    return res.status(200).json(data);
  }

  if (req.method === "GET") {
    const {
      data: { result },
    } = await apiAxios().get(`/t/exercises/${id}`);
    return res.status(200).json(result);
  }
}
