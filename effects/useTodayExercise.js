import axios from "axios";
import useSWR from "swr";

const getTodayExercise = async (url, seq) =>
  await axios.get(`/today/${seq}`).then(({ data }) => data);

export default function useTodayExercise(seq) {
  const { data, isValidating, error } = useSWR(
    ["/get/today/exercise", seq],
    getTodayExercise,
    {
      focusThrottleInterval: 60000,
    }
  );
  return {
    data,
    isLoading: !data && !error,
    error,
    isValidating,
  };
}
