import { useRecoilValue } from "recoil";
import { Table } from "../../../components/table";
import { categoryState } from "../../../core/atoms/management.atom";
import useCategoryItem from "../../../effects/useCategoryItem";

export default function CategoryItemList() {
  const selectCategory = useRecoilValue(categoryState);
  const { data, isLoading, error } = useCategoryItem(selectCategory?.num);
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
