// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../core/api";

export default async function handler(req, res) {
  const { query, body } = req;

  if (req.method === "PATCH") {
    const { id, name, desc } = body;
    const { exerciseId } = query;
    const { data } = await apiAxios().patch(`/exercise/${exerciseId}`, {
      name,
      desc,
    });
    return res.status(200).json(data);
  }
}
