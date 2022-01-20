// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../core/api";

export default async function handler(req, res) {
  const { body, query } = req;

  //title, desc, group_name, trainer_id, category_seq
  if (req.method === "POST") {
    const { id, title, desc } = body;

    try {
      const {
        data: { result },
      } = await apiAxios().post(`/exercise`, {
        title,
        desc,
        group_name: "dygym",
        trainer_id: "trainer1",
        category_seq: id,
      });
      return res.status(200).json(result);
    } catch (error) {
      console.error("[ERROR]:[create exercise]:", error);
    }
  }

  if (req.method === "PATCH") {
    const { seq, title, desc } = body;
    const {
      data: { result },
    } = await apiAxios().patch(`/exercise`, {
      title,
      desc,
      seq,
      trainer_id: "trainer1",
    });
    return res.status(200).json(result);
  }

  if (req.method === "DELETE") {
    const { id } = query;
    try {
      const {
        data: { result },
      } = await apiAxios().delete(`/exercise/${id}`);
      return res.status(200).json(result);
    } catch (error) {
      console.error("[ERROR]:[delete exercise]:", error);
    }
  }
}
