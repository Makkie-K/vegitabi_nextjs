import React, { useState, useEffect } from "react";
import { getAllAreas, getPostDataByArea } from "/src/lib/posts";
import utilStyles from "/src/styles/utils.module.css";
import Link from "/src/components/utils/Link";
import Date from "/src/components/date";
import Box from "@mui/material/Box";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Pagination from "@mui/material/Pagination";

export default function AreaIndex({ postData }) {
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const displayNum = 2;
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
            backgroundColor: "lightgrey",
            marginBottom: "30px",
          }}
        >
          {postData[0].areaJp}の記事一覧
        </Box>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {postData
            .slice(start, end)
            .map(({ id, date, title, contents, titlejp, avator }) => (
              <Box
                className={utilStyles.listItem}
                key={id}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  border: "solid 1px lightgrey",
                  padding: "5px",
                }}
              >
                <Box sx={{ width: { xs: "100%", md: "36%" } }}>
                  <Link href={`/posts/${id}`}>
                    <Avatar
                      alt={title}
                      src={`/images/posts/${id}/${avator}`}
                      // src={`/images/posts/${id}/1.webp`}
                      variant="square"
                      // sx={{ width: "100%", height: 135 }}
                      sx={{
                        width: "100%",
                        height: { xs: "300px", md: "180px" },
                      }}
                    />
                  </Link>
                </Box>
                <Box
                  sx={{
                    paddingLeft: "5px",
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ margin: "9px" }}>
                    <Link
                      href={`/posts/${id}`}
                      sx={{
                        // display: "flex",
                        textDecoration: "none",
                        color: "rgba(0, 0, 0, 0.55)",
                        overflow: "hidden",
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
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </Box>
                  <Box
                    sx={{
                      margin: "9px",
                      height: "60px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Link
                      href={`/posts/${id}`}
                      sx={{
                        color: "rgba(0, 0, 0, 0.55)",
                        textDecoration: "none",
                        fontSize: "85%",
                      }}
                    >
                      <a className="truncate">
                        {contents.length > maxLength
                          ? `${contents.slice(0, maxLength)}...[続きを読む]`
                          : contents}
                      </a>
                      {/* <a className="truncate">{contents}</a> */}
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
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
  const paths = getAllAreas();
  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  const postData = getPostDataByArea(params.area);
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
