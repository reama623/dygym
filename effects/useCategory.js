import axios from "axios";
import useSWR from "swr";

const getCategory = async () =>
  await axios.get("/category").then(({ data }) => data);

export default function useCategory() {
  const { data, isValidating, error } = useSWR("/get/category", getCategory, {
    focusThrottleInterval: 60000,
  });
  return {
    data,
    isLoading: isValidating,
    error,
  };
}
