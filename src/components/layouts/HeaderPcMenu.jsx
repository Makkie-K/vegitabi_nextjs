/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { menusArea } from "/src/lib/navigation";
import { menusCategory } from "/src/lib/navigation";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Link from "/src/components/utils/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HeaderPcMenu() {
  const [anchorElCategory, setAnchorElCategory] = React.useState(null);
  const [anchorElArea, setAnchorElArea] = React.useState(null);
  const openCategory = Boolean(anchorElCategory);
  const openArea = Boolean(anchorElArea);
  const handleClickCategory = (event) => {
    setAnchorElCategory(event.currentTarget);
  };
  const handleClickArea = (event) => {
    setAnchorElArea(event.currentTarget);
  };
  const handleCloseCategory = () => {
    setAnchorElCategory(null);
  };

  const handleCloseArea = () => {
    setAnchorElArea(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button
        id="basic-button"
        aria-controls={openCategory ? "basic-menu1" : undefined}
        aria-haspopup="true"
        aria-expanded={openCategory ? "true" : undefined}
        onClick={handleClickCategory}
        sx={{ color: "rgba(0, 0, 0, 0.87)" }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        カテゴリー
      </Button>
      <Menu
        id="basic-menu1"
        anchorEl={anchorElCategory}
        open={openCategory}
        onClose={handleCloseCategory}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menusCategory.map(({ text, url }) => (
          <Box key={url}>
            <Link
              href={`/categories/${url}`}
              sx={{
                color: "rgb(0,0,0,0.87)",
                textDecoration: "none",
                // background: "red",
                paddingLeft: "16px",
                paddingRight: "16px",
              }}
            >
              {text}
            </Link>
          </Box>
        ))}
      </Menu>
      <Button
        id="basic-button"
        aria-controls={openArea ? "basic-menu2" : undefined}
        aria-haspopup="true"
        aria-expanded={openArea ? "true" : undefined}
        onClick={handleClickArea}
        sx={{ color: "rgba(0, 0, 0, 0.87)" }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        エリア
      </Button>
      <Menu
        id="basic-menu2"
        anchorEl={anchorElArea}
        open={openArea}
        onClose={handleCloseArea}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menusArea.map(({ text, url }) => (
          <Box key={url}>
            <Link
              href={`/areas/${url}`}
              sx={{
                color: "rgb(0,0,0,0.87)",
                textDecoration: "none",
                // background: "red",
                paddingLeft: "16px",
                paddingRight: "16px",
              }}
            >
              {text}
            </Link>
          </Box>
        ))}
      </Menu>
      <Button>
        <Link
          href="/columns"
          sx={{
            color: "rgb(0,0,0,0.87)",
            textDecoration: "none",
            // background: "red",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          コラム
        </Link>
      </Button>
    </Box>
  );
}

// const container = css`
//   display: flex;
// `;
