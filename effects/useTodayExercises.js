import axios from "axios";
import useSWR from "swr";

const getTodayExercises = async (url, trainer_id) =>
  await axios.get(`/today?trainer_id=${trainer_id}`).then(({ data }) => data);

export default function useTodayExercises(trainerId) {
  const { data, isValidating, error } = useSWR(
    ["/get/today/exercises", trainerId],
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
        title: item.user_name,
        start: new Date(item.exercise_date),
        end: new Date(item.exercise_date),
        info: {
          ...item,
        },
      };
    });
  }
  return undefined;
}
