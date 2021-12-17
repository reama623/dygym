import axios from "axios";
import useSWR from "swr";
// import category from "../assets/category.json";
// import exercises from "../assets/exercises.json";

const getCategory = async () =>
  await axios.get("/category").then(({ data }) => data);

// const getSampleCategory = () => {
//   // category list + each other exercises

//   return new Promise((resolve, reject) => {
//     const newCategory = category.map((c) => {
//       const newCategory = {
//         ...c,
//         count: exercises.filter((ex) => ex.category_id === c.num).length,
//       };
//       return newCategory;
//     });
//     resolve(newCategory);
//   });
// };

export default function useCategory() {
  const { data, error } = useSWR("/get/category", getCategory, {
    focusThrottleInterval: 60000,
  });
  // const { data, error } = useSWR("/get/category", getSampleCategory, {
  //   focusThrottleInterval: 60000,
  // });
  return {
    data,
    isLoading: !error && !data,
    error,
  };
}
