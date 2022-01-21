import axios from "axios";
import useSWR from "swr";

const getAllUser = async (url, group, trainer) => {
  const { data } = await axios.get(
    `/user?group_name=${group}&trainer_id=${trainer}`
  );
  return data;
};

export default function useUsers(group, trainer) {
  const { data, isValidating, error } = useSWR(
    ["/get/users", group, trainer],
    getAllUser,
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
