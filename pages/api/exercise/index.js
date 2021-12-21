// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../core/api";
import { asyncFunction } from "../../../db/mysql";

export default async function handler(req, res) {
  const { body, query } = req;

  if (req.method === "POST") {
    const { id, name, desc } = body;
    const { data } = await apiAxios().post(`/exercise/create/${id}`, {
      name,
      description: desc,
    });
    return res.status(200).json(data);
  }

  if (req.method === "DELETE") {
    const { num } = query;
    const { data } = await apiAxios().delete(`/exercise/delete/${num}`);
    return res.status(200).json(data);
  }

  if (req.method === "PATCH") {
    const { id, name, desc } = body;
    const { data } = await apiAxios().patch(`/exercise/patch/${id}`, {
      name,
      description: desc,
    });
    return res.status(200).json(data);
  }
}
