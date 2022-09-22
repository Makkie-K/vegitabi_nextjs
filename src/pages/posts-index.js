import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import EachPostIndex from "/src/components/posts-index/each-post-index";

export default function PostsIndex() {
  // for (let i = 0; i < 10; i++) {
  //   console.log(i);
  // }
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <Typography sx={{ textAlign: "center" }}>記事一覧</Typography>
      {numbers.map((number) => (
        <MenuItem key={number}>
          <EachPostIndex />
        </MenuItem>
      ))}
    </>
  );
}
