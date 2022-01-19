// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../core/api";
// import { asyncFunction } from "../../../db/mysql";

export default async function handler(req, res) {
  const { body, query } = req;

  if (req.method === "POST") {
    const { user_id, exercises } = body;

    try {
      await apiAxios().post(`/t/exercises`, {
        trainer_id: 0,
        group_id: 0,
        exercises,
        created_user: 1,
        updated_user: 1,
        user_id: 0,
      });
      return res.status(201).json({ status: true, message: "create success" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ status: false, message: "create fail" });
    }
  }

  if (req.method === "GET") {
    const {
      data: { result },
    } = await apiAxios().get(
      `/t/exercises?trainer_id=Park&group_name=dygym&start_date=2022-01-01&end_date=2022-01-31`
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
