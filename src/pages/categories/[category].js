import React, { useState, useEffect } from "react";
import { getAllCategories, getPostDataByCategory } from "/src/lib/posts";
import utilStyles from "/src/styles/utils.module.css";
import Link from "/src/components/utils/Link";
import Date from "/src/components/date";
import Box from "@mui/material/Box";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";
import { rgbToHex } from "@mui/material";

export default function CategoryIndex({ postData }) {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const displayNum = 10;
  const [end, setEnd] = useState(displayNum);

  const handleChange = (e, page) => {
    const start = (page - 1) * displayNum;
    const end = start + displayNum;
    setStart(start);
    setEnd(end);
    setPage(page);
  };
  console.log(postData);
  useEffect(() => {
    setStart(0);
    setEnd(displayNum);
    setPage(1);
  }, [postData]);

  const pageCount = Math.ceil(postData.length / displayNum);
  const maxLength = 36;
  return (
    <Layout>
      <Container maxWidth="md" sx={{ marginTop: "90px}" }}>
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "",
            marginBottom: "30px",
          }}
        >
          {postData[0].categoryJp}の記事一覧
        </Box>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {postData
            .slice(start, end)
            // .slice(start, postData.length - (page - 1) * 2)
            .map(
              ({
                id,
                date,
                title,
                titlejp,
                contents,
                avator,
                address,
                telephone,
                businessHour,
              }) => (
                // {postData.map(({ id, date, title, contents }) => (
                <Box
                  className={utilStyles.listItem}
                  key={id}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    // border: "solid 1px lightgrey",
                    // padding: "5px",
                  }}
                >
                  <Box sx={{ width: { xs: "100%", md: "36%" } }}>
                    <Link href={`/posts/${id}`}>
                      <Avatar
                        alt={title}
                        src={`/images/posts/${id}/${avator}`}
                        variant="square"
                        // sx={{ width: "100%", height: 135 }}
                        sx={{
                          width: "100%",
                          height: 222,
                        }}
                      />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "64%" },
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid lightgrey",
                        marginLeft: { xs: "0", md: "9px" },
                        marginBottom: "8px",
                      }}
                    >
                      <Box
                        sx={{
                          // backgroundColor: "red",
                          display: "flex", // 横並びにする
                          alignItems: "center", // 縦方向の中央揃え
                          justifyContent: "space-between", // 要素の間隔を均等にする
                          marginLeft: { xs: "0", md: "9px" },
                          marginBottom: "8px", // 下の余白を設定
                        }}
                      >
                        <Box>
                          <Link
                            href={`/posts/${id}`}
                            sx={{
                              textDecoration: "none",
                              color: "rgba(0, 0, 0, 0.55)",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {title}
                          </Link>
                          <Box
                            sx={{
                              // paddingLeft: "6px",
                              fontSize: "14px",
                              color: "rgba(0, 0, 0, 0.55)",
                            }}
                          >
                            ({titlejp})
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          marginBottom: "-28px",
                          // backgroundColor: "yellow",
                        }}
                      >
                        <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                        </small>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        height: "auto",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        backgroundColor: "#fffcf9",
                        marginLeft: { xs: "0", md: "9px" },
                      }}
                    >
                      <div className={utilStyles.table}>
                        <div>
                          <div>住所</div>
                          <div>{address}</div>
                        </div>
                        <div>
                          <div>電話番号</div>
                          <div> {telephone}</div>
                        </div>
                        <div>
                          <div>営業時間</div>
                          <div>{businessHour}</div>
                        </div>

                        {/* <div>住所: {address}</div>
                        <div>電話番号: {telephone}</div>
                        <div>営業時間: {businessHour}</div> */}
                      </div>
                      {/* {contents.length > maxLength
                        ? `${contents.slice(0, maxLength)}...[続きを読む]`
                        : contents} */}
                      {/* </Link> */}
                    </Box>
                  </Box>
                </Box>
              )
            )}
          {/* </ul> */}
        </section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Box>
            <Pagination
              // count={Math.ceil(postData.length / 2)}
              count={pageCount}
              page={page}
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Container>
    </Layout>
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

  return {
    props: {
      postData,
    },
  };
}
