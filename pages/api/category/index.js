import { apiAxios } from "../../../core/api";

export default async function handler(req, res) {
  const { query, body } = req;
  if (req.method === "GET") {
    const { data } = await apiAxios().get("/category/all");
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { name, desc } = body;
    const { data } = await apiAxios().post("/category", { name, desc });
    return res.status(200).json(data);
  }

  if (req.method === "DELETE") {
    const { id } = query;
    const { data } = await apiAxios().delete(`/category/${id}`);
    return res.status(200).json(data);
  }

  if (req.method === "PATCH") {
    const { id } = query;
    const { name, desc } = body;
    const { data } = await apiAxios.patch(`/category/${id}`, {
      name,
      description: desc,
    });
    return res.status(200).json(data);
  }
}
