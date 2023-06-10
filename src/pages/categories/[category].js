import { getAllCategories, getPostDataByCategory } from "/src/lib/posts";
import utilStyles from "/src/styles/utils.module.css";
import Link from "/src/components/utils/Link";
import Date from "/src/components/date";
import Box from "@mui/material/Box";
import Layout from "/src/components/layouts/layout";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

export default function CategoryIndex({ postData }) {
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
          {postData[0].category}の記事一覧
        </Box>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {postData.map(({ id, date, title, contents }) => (
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
              <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                <Link href={`/posts/${id}`}>
                  <Avatar
                    alt={title}
                    src={`/images/posts/${id}/1.webp`}
                    variant="square"
                    // sx={{ width: "100%", height: 135 }}
                    sx={{ width: "100%", height: 180 }}
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
                      display: "-webkitBox",
                      textDecoration: "none",
                      color: "rgba(0, 0, 0, 0.55)",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      "-webkitBoxOrient": "vertical",
                      "-webkitLineClamp": "2",
                    }}
                  >
                    {title}
                  </Link>
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
                    // display: "-webkit-box",
                    display: "-webkitBox",
                    // "-webkitBoxOrient": "vertical",
                    // "-webkitLineClamp": "2",
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
                    {contents}
                  </Link>
                </Box>
              </Box>
            </Box>
          ))}
          {/* </ul> */}
        </section>
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
