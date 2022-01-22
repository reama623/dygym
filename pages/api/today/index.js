// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../core/api";
// import { asyncFunction } from "../../../db/mysql";

export default async function handler(req, res) {
  const { body, query } = req;

  if (req.method === "POST") {
    try {
      await apiAxios().post(`/t/exercises`, {
        ...body,
      });
      return res.status(201).json({ status: true, message: "create success" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ status: false, message: "create fail" });
    }
  }

  if (req.method === "PATCH") {
    try {
      await apiAxios().patch(`/t/exercises`, {
        ...body,
      });
      return res.status(201).json({ status: true, message: "create success" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ status: false, message: "create fail" });
    }
  }

  if (req.method === "GET") {
    const { trainer_id } = query;
    const {
      data: { result },
    } = await apiAxios().get(
      `/t/exercises?trainer_id=${trainer_id}&group_name=dygym&start_date=2022-01-01&end_date=2022-01-31`
    );
    return res.status(200).json(result);
    // const data = await asyncFunction("select * from t_today_exercises");
    // console.log("today--", data);
  }

  // if (req.method === "DELETE") {
  //   const { id } = query;
  //   const { data } = await apiAxios().delete(`/exercise/${id}`);
  //   return res.status(200).json(data);
  // }
}
