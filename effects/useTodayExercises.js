import axios from "axios";
import useSWR from "swr";

const getTodayExercises = async (url, id) =>
  await axios.get("/today").then(({ data }) => data);

export default function useTodayExercises(trainerId) {
  const { data, isValidating, error } = useSWR(
    ["/get/today/exercise", trainerId],
    getTodayExercises,
    {
      focusThrottleInterval: 60000,
    }
  );

  return {
    data: converting(data),
    isLoading: !data && !error,
    error,
    isValidating,
  };
}

function converting(items) {
  if (items) {
    return items?.map((item) => {
      return {
        title: item.user_id,
        start: new Date(item.exercise_date),
        end: new Date(item.exercise_date),
        info: {
          userId: item.user_id,
          name: item.user_id,
          exercise: item.exercises,
        },
      };
    });
  }
  return undefined;
}
