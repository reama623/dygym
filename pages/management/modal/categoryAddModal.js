import classNames from "classnames";
import { useRecoilState } from "recoil";
import { categoryCreateState } from "../../../core/atoms/management.atom";

export default function CategoryAddModal() {
  const [newCategory, setNewCategory] = useRecoilState(categoryCreateState);
  const handleCategory = (e) => {
    setNewCategory({
      ...newCategory,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={classNames("dy__category-add_modal")}>
      <div className={classNames("dy__category-add_modal-title")}>
        <label>이름</label>
        <div className={classNames("dy__category-add_modal-title_input")}>
          <input
            name="name"
            value={newCategory.name}
            onChange={handleCategory}
          />
        </div>
      </div>
      <div className={classNames("dy__category-add_modal-desc")}>
        <div>설명</div>
        <div className={classNames("dy__category-add_modal-desc_text")}>
          <textarea
            name="desc"
            rows={6}
            onChange={handleCategory}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
