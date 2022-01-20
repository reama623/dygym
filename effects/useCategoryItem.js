import axios from "axios";
import useSWR from "swr";

const getCategoryItem = async (path, id) => {
  return await axios.get(`/category/list/${id}`).then(({ data }) => data);
};

export default function useCategoryItem(id) {
  const { data, isValidating, error } = useSWR(
    ["/get/category/list", id],
    getCategoryItem,
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
