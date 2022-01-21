import axios from "axios";
import useSWR from "swr";

const getTodayExercise = async (url, group, trainer, userr, date) =>
  await axios.get("/today").then(({ data }) => data);

export default function useTodayExercise(group, trainer, user, date) {
  const { data, isValidating, error } = useSWR(
    ["/get/today/exercise", group, trainer, user, date],
    getTodayExercise,
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
          userId: item.user_id,
          name: item.user_name,
          exercise: item.exercises,
        },
      };
    });
  }
  return undefined;
}
