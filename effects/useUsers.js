import axios from "axios";
import useSWR from "swr";

// const getCategory = async () =>
//   await axios.get("/category").then(({ data }) => data);
const getUsers = () => [
  { id: "user1", name: "김지영" },
  { id: "user2", name: "박성일" },
];

export default function useUsers() {
  const { data, isValidating, error } = useSWR("/get/users", getUsers, {
    focusThrottleInterval: 60000,
  });
  return {
    data,
    isLoading: isValidating,
    error,
  };
}
