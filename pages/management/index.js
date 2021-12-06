import { useState } from "react";
import Head from "next/head";
import Dialog from "../../components/dialog";
import Modal from "../../components/modal";
import classNames from "classnames";
import CategoryCard from "../../components/category/categoryCard";
// import useCategory from "../../effects/useCategory";
import CategoryItemList from "./list";

import useCategory from "../../effects/useCategory";
import Button from "../../components/button";

function Making() {
  const { data, isLoading, error } = useCategory();
  const [selectCategory, setSelectCategory] = useState(null);
  // const { data, isLoading, error } = useCategory();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = (e) => setIsOpen(false);
  const handleOpen = (e) => setIsOpen(true);

  const handleCardClick = (e, category) => {
    setSelectCategory(category);
  };

  return (
    <>
      <Head>
        <title>운동 만들기</title>
        <meta name="description" content="Generate Exercise of today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {error && <div>error발생, 관리자에게 문의해주세요</div>} */}
      {!isLoading && (
        <>
          <div className={classNames("dy__category-head")}>
            <div className={classNames("dy__category-head_title")}>
              운동 구분
            </div>
            <Button name="Add" handleClick={handleOpen} />
          </div>
          <div className={classNames("dy__category-list")}>
            {data?.map((d) => (
              <CategoryCard
                key={d.num}
                item={d}
                handleClick={handleCardClick}
                select={d.num === selectCategory?.num}
              />
            ))}
          </div>
          {selectCategory != null && (
            <div className={classNames("dy__category-items")}>
              <div className={classNames("dy__category-items_head")}>
                <div className={classNames("dy__category-items_head-title")}>
                  {selectCategory.name}
                </div>
                <Button name="Add" handleClick={handleOpen} />
              </div>
              <CategoryItemList category={selectCategory} />
            </div>
          )}
        </>
      )}
      {isOpen && (
        <Modal>
          <Dialog open={isOpen} handleClose={handleClose} />
        </Modal>
      )}
    </>
  );
}

// export async function getStaticProps(context) {
//   return {
//     props: {
//       category: [],
//     },
//   };
// }

export default Making;
