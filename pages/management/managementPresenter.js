import { useRecoilValue } from "recoil";

import Head from "next/head";
import classNames from "classnames";
import Button from "../../components/button";

import CategoryList from "./components/categoryList";
import CategoryItemList from "./components/categoryItemList";
import { categoryState } from "../../core/atoms/management.atom";

function ManagementPresenter({ handleOpen, handleCardClick }) {
  const selectCategory = useRecoilValue(categoryState);
  return (
    <>
      <Head>
        <title>운동 만들기</title>
        <meta name="description" content="Generate Exercise of today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {error && <div>error발생, 관리자에게 문의해주세요</div>} */}
      <div className={classNames("dy__category-head")}>
        <div className={classNames("dy__category-head_title")}>운동 구분</div>
        <Button
          name="Add"
          handleClick={(e) => handleOpen(e, "새 구분 추가", "categoryAdd")}
        />
      </div>
      <CategoryList handleClick={handleCardClick} />
      {selectCategory && (
        <div className={classNames("dy__category-items")}>
          <div className={classNames("dy__category-items_head")}>
            <div className={classNames("dy__category-items_head-title")}>
              선택 운동 : {selectCategory?.name}
            </div>
            <Button
              name="Add"
              handleClick={(e) =>
                handleOpen(
                  e,
                  `${selectCategory?.name} 운동 추가`,
                  "exerciseAdd"
                )
              }
            />
          </div>
          <CategoryItemList />
        </div>
      )}
    </>
  );
}

export default ManagementPresenter;
