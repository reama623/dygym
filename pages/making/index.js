import { collection, getDocs } from "@firebase/firestore";
import classNames from "classnames";
import Head from "next/head";
import { CategoryCard } from "../../components/category";
import { db } from "../../db/firebase";

function Making({ category }) {
  return (
    <>
      <Head>
        <title>운동 만들기</title>
        <meta name="description" content="Generate Exercise of today" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classNames("dy__category-list")}>
        {category && category.map((c) => <CategoryCard item={c} />)}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const categoryCol = collection(db, "category");
  const categorySnapshot = await getDocs(categoryCol);
  const categoryList = categorySnapshot.docs.map((doc) => doc.data());
  return {
    props: {
      category: [...categoryList],
    },
  };
}

export default Making;
