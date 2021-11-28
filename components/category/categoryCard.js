import classNames from "classnames";

function CategoryCard({ item }) {
  return (
    <div className={classNames("dy__category-card")}>
      <div className={classNames("dy__category-title")}>
        <span>{item?.name}</span>
      </div>
      <div className={classNames("dy__category-content")}>
        {item?.description}
      </div>
    </div>
  );
}

export default CategoryCard;
