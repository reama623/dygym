// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiAxios } from "../../../core/api";
// import { asyncFunction } from "../../../db/mysql";

export default async function handler(req, res) {
  const { body, query } = req;

  // 수정 필요
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
    const { group_name, trainer_id } = query;
    const {
      data: { result },
    } = await apiAxios().get(
      `/user/all?group_name=${group_name}&trainer_id=${trainer_id}`
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
