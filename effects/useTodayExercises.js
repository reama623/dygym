import axios from "axios";
import useSWR from "swr";

const getTodayExercises = async (item) =>
  await axios.get("/today").then(({ data }) => data);

export default function useTodayExercises() {
  const { data, isValidating, error } = useSWR(
    "/get/users",
    getTodayExercises,
    {
      focusThrottleInterval: 60000,
    }
  );

  const isLoading = !data && !error;
  return {
    data: !isLoading ? converting(data) : undefined,
    isLoading,
    error,
  };
}

function converting(items) {
  if (items) {
    return items?.map((item) => {
      console.log(item)
      return {
        title: item.user_id,
        start: new Date(item.exrcise_date?.toString()),
        end: new Date(item.exrcise_date?.toString()),
        info: {
          userId: item.user_id,
          name: item.user_id,
          exercise: item.exercises,
        },
      };
    });
  }
  return [];
}
