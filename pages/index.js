import classNames from "classnames";
import CategoryCard from "../components/category/categoryCard";
import CategoryItem from "../components/category/categoryItem";

export default function Home() {
  return (
    <div>
      <div className={classNames("dy__home-category_list")}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <div className={classNames("dy__home-category-items")}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
}
