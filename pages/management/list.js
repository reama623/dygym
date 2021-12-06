import { Table } from "../../components/table";
import useCategoryItem from "../../effects/useCategoryItem";

export default function CategoryItemList({ category }) {
  // console.log(category);
  const { data, isLoading, error } = useCategoryItem(category.num);
  const columns = [
    { key: "num", name: "번호" },
    { key: "name", name: "운동 이름" },
    { key: "desc", name: "설명" },
  ];
  if (error) {
    return <div>Error</div>;
  }
  return <Table columns={columns} loading={isLoading} data={data} />;
}
