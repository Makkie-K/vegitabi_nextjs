/** @jsxImportSource @emotion/react*/
import { css } from "@emotion/react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchBar from "/src/components/layouts/SearchBar";
import HeaderPc from "./HeaderPc";
import HeaderMo from "./HeaderMo";
// import Link from "/src/components/utils/Link";
import Link from "@mui/material/Link";
import HeaderMenu1 from "./HeaderMenu1";
import HeaderMenu2 from "./HeaderMenu2";
// const pages = ["Products", "Pricing", "Blog"];
const indexes = [
  ["記事一覧", "/posts"],
  ["コラム一覧", "/columns"],
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // <AppBar position="static" color="default">
    <AppBar position="fixed" color="default">
      <Container maxWidth="xl">
        {/* <Toolbar disableGutters> */}
        <div>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <HeaderPc />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <HeaderMo />
          </Box>
          {/* </Toolbar> */}
        </div>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

// export default function Header() {
//   return <p>Header2</p>;
// }
const container = css`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  height: 50px;
  width: 100%;
  background-color: #fff;
  border-bottom: solid 1px #ebebeb;
`;
const headerBoxLeft = css`
  display: flex;
`;
const headerBoxRight = css`
  @media (min-width: 600px) {
    display: none;
  } ;
`;
const headerMenuPc = css`
  @media (max-width: 600px) {
    display: none;
  }
  @media (min-width: 600px) {
    display: flex;
  } ;
`;
const headerLogo = css`
  display: flex;
  /* align-items: center; */
`;
const headerLogoInner = css`
  text-transform: lowercase;
  margin-top: -3px;
`;
const headerMenu = css`
  text-decoration: none;
`;
// /** @jsxImportSource @emotion/react*/
// import { css } from "@emotion/react";

// export default function Header() {
//   return <h1>Hello SHOさん</h1>;
// }
