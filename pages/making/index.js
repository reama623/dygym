import classNames from "classnames";
import Head from "next/head";
import { useState } from "react";
import { CategoryCard } from "../../components/category";
import Dialog from "../../components/dialog";
import Modal from "../../components/modal";
import useCategory from "../../effects/useCategory";

function Making() {
  const { data, isLoading, error } = useCategory();

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = (e) => setIsOpen(false);
  const handleOpen = (e) => setIsOpen(true);
  return (
    <>
      <Head>
        <title>운동 만들기</title>
        <meta name="description" content="Generate Exercise of today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {error && <div>error발생, 관리자에게 문의해주세요</div>}
      {data && (
        <>
          <div className={classNames("dy__category-head")}>
            <div className={classNames("dy__category-head_title")}>
              운동 구분
            </div>
            <div
              className={classNames("dy__category-head_btn")}
              onClick={handleOpen}
            >
              add
            </div>
          </div>
          <div className={classNames("dy__category-list")}>
            {!isLoading &&
              data.map(({ data, key }) => (
                <CategoryCard key={key} item={data} />
              ))}
          </div>
          <div className={classNames("dy__category-items")}>
            
          </div>
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

// export async function getServerSideProps(context) {
//   const categorySnapshot = await getDocs(collection(db, "category"));
//   const categoryList = categorySnapshot.docs.map((doc) => doc.data());
//   return {
//     props: {
//       category: [...categoryList],
//     },
//   };
// }

export default Making;
