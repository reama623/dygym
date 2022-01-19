import axios from "axios";
import useSWR from "swr";

const getCategory = async () => {
  try {
    return await axios
      .get("/category", {
        timeout: 60000,
      })
      .then(({ data }) => data);
  } catch (error) {
    return [];
  }
};
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
