import React from "react";
import { useRouter } from "next/router";
// import { getResultBySearch } from "/src/lib/getResultBySearch";
import { getSearchedPostsData } from "/src/lib/posts";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Date from "/src/components/date";
import utilStyles from "/src/styles/utils.module.css";
import Box from "@mui/material/Box";
import Link from "/src/components/utils/Link";
import Avatar from "@mui/material/Avatar";

// export default function Search({ searchedPostsData, keyword }) {
//   const results = JSON.parse(searchedPostsData);
//   console.log(results);
//   return (
//     <Layout>
//       <Container maxWidth="md" sx={{ marginTop: "30px}" }}>
//         <section>キーワード: 「{keyword}」</section>
//         <section>検索結果: {searchedPostsData}</section>
//       </Container>
//     </Layout>
//   );
// }

// export default function Search({ searchedPostsData, keyword }) {
//   const results = JSON.parse(searchedPostsData);
//   return (
//     <Layout>
//       <Container maxWidth="md" sx={{ marginTop: "30px}" }}>
//         <Box
//           sx={{
//             textAlign: "center",
//             backgroundColor: "lightgrey",
//             marginBottom: "30px",
//           }}
//         >
//           「<span>{keyword}</span>」を含む記事一覧
//         </Box>
//         <section>
//           {results.length > 0 ? (
//             <div>
//               {results.map((result) => (
//                 <div key={result.id}>{result.title}</div>
//               ))}
//             </div>
//           ) : (
//             <div>検索結果なし</div>
//           )}
//         </section>
//       </Container>
//     </Layout>
//   );
// }

export default function Search({ searchedPostsData, keyword, hardData }) {
  const results = JSON.parse(searchedPostsData);
  const hardResults = JSON.parse(hardData);
  console.log(results);
  return (
    <Layout>
      <Container maxWidth="md" sx={{ marginTop: "100px" }}>
        {!keyword || keyword === "" ? (
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "lightgrey",
              marginBottom: "30px",
            }}
          >
            検索画面
          </Box>
        ) : (
          <>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "lightgrey",
                marginBottom: "30px",
              }}
            >
              「<span>{keyword}</span>」を含む記事一覧
            </Box>
            <section>
              {results.length > 0 ? (
                <div>
                  {results.map((result) => (
                    <div key={result.id}>{result.title}</div>
                  ))}
                </div>
              ) : (
                <div>検索結果なし</div>
              )}
            </section>
            <section>
              {hardResults.length > 0 ? (
                <div>
                  {hardResults.map((result) => (
                    <div key={result.id}>{result.title}</div>
                  ))}
                </div>
              ) : (
                <div>hardResults　データなし</div>
              )}
            </section>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const keyword = context.query.keyword || "";
  try {
    let searchedPostsData = await getSearchedPostsData(keyword);
    searchedPostsData = JSON.stringify(searchedPostsData);
    let hardData = [
      { id: "1", title: "title-1" },
      { id: "2", title: "title-2" },
      { id: "3", title: "title-3" },
      { id: "4", title: "title-4" },
    ];
    hardData = JSON.stringify(hardData);
    return {
      props: {
        keyword,
        searchedPostsData,
        hardData,
      },
    };
  } catch (error) {
    console.error("Error fetching searched posts data:", error);
    return {
      props: {
        keyword,
        searchedPostsData: JSON.stringify([]), // or handle it in a way that makes sense for your application
        error: "Failed to fetch searched posts data",
      },
    };
  }
}

// import React from "react";
// import { useRouter } from "next/router";
// // import { getResultBySearch } from "/src/lib/getResultBySearch";
// import { getSearchedPostsData } from "/src/lib/posts";
// import Layout from "/src/components/layouts/layout";
// import Container from "@mui/material/Container";
// import Date from "/src/components/date";
// import utilStyles from "/src/styles/utils.module.css";
// import Box from "@mui/material/Box";
// import Link from "/src/components/utils/Link";
// import Avatar from "@mui/material/Avatar";

// export default function Search({ searchedPostsData, keyword }) {
//   // export default function Search({ keyword }) {
//   const results = JSON.parse(searchedPostsData);
//   console.log(results);
//   return (
//     <Layout>
//       <Container maxWidth="md" sx={{ marginTop: "30px}" }}>
//         <Box
//           sx={{
//             textAlign: "center",
//             backgroundColor: "lightgrey",
//             marginBottom: "30px",
//           }}
//         >
//           「<span>{keyword}</span>」を含む記事一覧
//         </Box>
//         <section>
//           {results.length > 0 ? (
//             <div>
//               {results.map((result) => (
//                 <Box
//                   className={utilStyles.listItem}
//                   key={result.id}
//                   sx={{
//                     display: "flex",
//                     flexDirection: { xs: "column", md: "row" },
//                     border: "solid 1px lightgrey",
//                     padding: "5px",
//                   }}
//                 >
//                   <Box sx={{ width: { xs: "100%", md: "50%" } }}>
//                     <Link href={`/posts/${result.id}`}>
//                       <Avatar
//                         alt={result.title}
//                         src={`/images/posts/${result.id}/1.webp`}
//                         variant="square"
//                         // sx={{ width: "100%", height: 135 }}
//                         sx={{ width: "100%", height: 180 }}
//                       />
//                     </Link>
//                   </Box>
//                   <Box
//                     sx={{
//                       paddingLeft: "5px",
//                       width: { xs: "100%", md: "50%" },
//                       display: "flex",
//                       justifyContent: "space-between",
//                       flexDirection: "column",
//                     }}
//                   >
//                     <Box sx={{ margin: "9px" }}>
//                       <Link
//                         href={`/posts/${result.id}`}
//                         sx={{
//                           // display: "flex",
//                           //
//                           display: "-webkitBox",
//                           textDecoration: "none",
//                           color: "rgba(0, 0, 0, 0.55)",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                           "-webkitBoxOrient": "vertical",
//                           "-webkitLineClamp": "2",
//                         }}
//                       >
//                         {result.title}
//                       </Link>
//                       <small className={utilStyles.lightText}>
//                         <Date dateString={result.date} />
//                       </small>
//                     </Box>
//                   </Box>
//                 </Box>
//               ))}
//             </div>
//           ) : (
//             <div>検索結果なし</div>
//           )}
//         </section>
//       </Container>
//     </Layout>
//   );
// }

// export async function getServerSideProps(context) {
//   const keyword = context.query.keyword;

//   let searchedPostsData = await getSearchedPostsData(keyword);

//   searchedPostsData = JSON.stringify(searchedPostsData);
//   return {
//     props: {
//       keyword,
//       searchedPostsData,
//     },
//   };
// }
