// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../core/api";

export default async function handler(req, res) {
  const { body, query } = req;

  if (req.method === "POST") {
    const { id, title, desc } = body;
    const {
      data: { result },
    } = await apiAxios().post(`/exercise/${id}`, {
      title,
      desc,
    });
    return res.status(200).json(result);
  }

  if (req.method === "DELETE") {
    const { id } = query;
    const {
      data: { result },
    } = await apiAxios().delete(`/exercise/${id}`);
    return res.status(200).json(result);
  }
}
