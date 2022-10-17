import { getAllCategories, getPostDataByCategory } from "/src/lib/posts";
import utilStyles from "/src/styles/utils.module.css";
import Link from "/src/components/utils/Link";
import Date from "/src/components/date";

export default function CategoryIndex({ postData }) {
  return (
    <ul className={utilStyles.list}>
      {postData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticPaths() {
  const paths = getAllCategories();
  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  const postData = getPostDataByCategory(params.category);
  // const pData = getPostDataByCategory(params.category);
  // const postData = pData.filter((val) => Boolean(val));
  // const postData = getPostDataByCategory(params.category);
  // console.log("In getStaticProps" + JSON.stringify(postData));
  // console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

// export async function getStaticPaths() {
//   // id としてとりうる値のリストを返す
//   // const paths = getAllCategories();
//   // const pathss = ["accomodation", "eat-drink"];
//   const paths = [
//     { paths: { category: "accommodation" } },
//     { paths: { category: "eat-drink" } },
//   ];
//   return {
//     paths,
//     fallback: false,
//   };
// }
// export async function getStaticProps({ params }) {
//   console.log("params: " + JSON.stringify(params));

//   // params.id を使用して、ブログの投稿に必要なデータを取得する
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
