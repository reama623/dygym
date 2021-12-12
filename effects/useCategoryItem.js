import useSWR from "swr";
import exercises from "../assets/exercises.json";

const getCategoryItem = async (path, id) => {
  return await fetch(`http://localhost:3000/api/category/list/${id}`).then(
    (o) => o.json()
  );
};

// const getCategoryItem = (key, id) => {
//   return new Promise((resolve, reject) => {
//     const filteringItem = exercises.filter(
//       (exercise) => exercise.category_id === id
//     );
//     resolve(filteringItem);
//   });
// };

export default function useCategoryItem(id) {
  // const { data, isLoading, error } = useSWR(
  //   "/get/category/item",
  //   () => categoryItem(id),
  //   {
  //     focusThrottleInterval: 60000,
  //   }
  // );
  const {
    data = [],
    isLoading,
    error,
  } = useSWR(["/get/category/list", id], (url) => getCategoryItem(url, id), {
    focusThrottleInterval: 60000,
  });

  return {
    data,
    isLoading,
    error,
  };
}
