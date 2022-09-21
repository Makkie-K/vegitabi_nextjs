import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClick = function (event) {
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        // sxはマテリアルUIにcssを書くツール
        sx={{ color: "white" }}
      >
        カテゴリー別
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>宿泊施設/Accomodations</MenuItem>
        <MenuItem onClick={handleClose}>飲食店/Eat &amp; Drink</MenuItem>
        <MenuItem onClick={handleClose}>
          空港・機内食/Airport &amp; Airline
        </MenuItem>
        <MenuItem onClick={handleClose}>その他/Others</MenuItem>
      </Menu>
    </Box>
  );
}
