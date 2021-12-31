import axios from "axios";
import useSWR from "swr";

const getTodayExercises = async () =>
  await axios.get("/today").then(({ data }) => data);

export default function useTodayExercises() {
  const { data, isValidating, error } = useSWR(
    "/get/users",
    getTodayExercises,
    {
      focusThrottleInterval: 60000,
    }
  );
  return {
    data,
    isLoading: isValidating,
    error,
  };
}
