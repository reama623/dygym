import { collection, getDocs } from "@firebase/firestore";
import useSWR from "swr";
import { db } from "../db/firebase";

const categorySnapshot = async () => await getDocs(collection(db, "category"));

export default function useCategory() {
  const { data, isLoading, error } = useSWR("/get/category", categorySnapshot, {
    focusThrottleInterval: 60000,
  });
  const category = [];
  if (data) {
    const list = data.docs.map((d) => ({
      data: d.data(),
      key: d.id,
    }));
    category = [...list];
  }
  return {
    data: category,
    isLoading,
    error,
  };
}
