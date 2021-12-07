import classNames from "classnames";

export default function CategoryAddModal() {
  return (
    <div className={classNames("dy__category-add_modal")}>
      <div className={classNames("dy__category-add_modal-title")}>
        <label>이름</label>
        <div className={classNames("dy__category-add_modal-title_input")}>
          <input name="category_name" />
        </div>
      </div>
      <div className={classNames("dy__category-add_modal-desc")}>
        <div>설명</div>
        <div className={classNames("dy__category-add_modal-desc_text")}>
          <textarea name="category_desc" rows={6}></textarea>
        </div>
      </div>
    </div>
  );
}
