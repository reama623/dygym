import { apiAxios } from "../../../core/api";

export default async function handler(req, res) {
  const { query } = req;
  if (req.method === "DELETE") {
    const { id } = query;
    const {
      data: { result },
    } = await apiAxios().delete(`/category/${id}`);
    return res.status(200).json(result);
  }
}
