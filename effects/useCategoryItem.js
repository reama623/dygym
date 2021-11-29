import { collection, getDocs } from "@firebase/firestore";
import { db } from "../db/firebase";

const categoryItemSnapshot = async () =>
  await getDocs(collection(db, "category"));

export default function useCategoryItem({ id }) {
  const { data, isLoading, error } = useSWR(
    "/get/category/item",
    categoryItemSnapshot,
    {
      focusThrottleInterval: 60000,
    }
  );
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
