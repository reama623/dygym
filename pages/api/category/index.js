import { apiAxios } from "../../../core/api";

export default async function handler(req, res) {
  const { query, body } = req;
  if (req.method === "GET") {
    const {
      data: { result },
    } = await apiAxios().get(
      "/category/all?trainer_id=trainer1&group_name=dygym"
    );
    return res.status(200).json(result);
  }

  if (req.method === "POST") {
    const { title, desc } = body;
    const {
      data: { result },
    } = await apiAxios().post("/category", {
      title,
      desc,
      group_name: "dygym",
      trainer_id: "trainer1",
      created_user: "admin",
      updated_user: "admin",
    });
    return res.status(200).json(result);
  }

  if (req.method === "PATCH") {
    const { seq, title, desc } = body;
    const {
      data: { result },
    } = await apiAxios().patch(`/category`, {
      seq,
      title,
      desc,
      trainer_id: "trainer1",
    });
    return res.status(200).json(result);
  }
}
