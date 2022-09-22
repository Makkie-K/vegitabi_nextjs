import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function HeaderMenu1() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
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
        <MenuItem onClick={handleClose}>
          <Link href="/accomodation-index">宿泊施設</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/eat-drink-index">飲食店</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/airplane-airport-index">空港・機内食</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/others-index">その他</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
