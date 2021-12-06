import classNames from "classnames";

function CategoryCard({ item, select, handleClick }) {
  return (
    <div
      className={classNames("dy__category-card", select && 'dy__category-card_select')}
      onClick={(e) => handleClick(e, item)}
    >
      <div className={classNames("dy__category-title")}>
        <div className={classNames("dy__category-title_name")}>
          {item?.name}
        </div>
        <div className={classNames("dy__category-title_count")}>
          {item?.count}
        </div>
      </div>
      <div className={classNames("dy__category-content")}>
        {item?.description}
      </div>
    </div>
  );
}

export default CategoryCard;
