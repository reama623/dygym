import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import { useRecoilValue } from "recoil";

import CategoryCard from "../../../components/category/categoryCard";
import { categoryState } from "../../../core/atoms/management.atom";
import useCategory from "../../../effects/useCategory";

function CategoryList({ handleClick }) {
  const router = useRouter();

  const selectCategory = useRecoilValue(categoryState);
  const { data, isLoading, error } = useCategory(router.basePath);
  return (
    !isLoading && (
      <div className={classNames("dy__category-list")}>
        {data?.map((d) => (
          <CategoryCard
            key={d.num}
            item={d}
            handleClick={handleClick}
            select={d.num === selectCategory?.num}
          />
        ))}
      </div>
    )
  );
}

export default CategoryList;
