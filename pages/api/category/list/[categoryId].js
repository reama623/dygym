// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../../core/api";

export default async function handler(req, res) {
  const { method, query } = req;
  const { categoryId } = query;
  if (method === "GET") {
    const url = `/category/exercise/${categoryId}?trainer_id=trainer1&group_name=dygym`;
    try {
      const {
        data: { result },
      } = await apiAxios().get(
        `/category/exercise/${categoryId}?trainer_id=trainer1&group_name=dygym`
      );
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(200).json([]);
    }
  }
}
