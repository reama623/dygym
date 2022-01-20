// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../core/api";

export default async function handler(req, res) {
  const { query, body } = req;

  if (req.method === "PATCH") {
    const { id, title, desc } = body;
    const { exerciseId } = query;
    const {
      data: { result },
    } = await apiAxios().patch(`/exercise/${exerciseId}`, {
      title,
      desc,
    });
    return res.status(200).json(result);
  }

  if (req.method === "DELETE") {
    const { exerciseId } = query;
    const {
      data: { result },
    } = await apiAxios().delete(`/exercise/${exerciseId}`);
    return res.status(200).json(result);
  }
}
