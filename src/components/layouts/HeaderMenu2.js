import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export default function HeaderMenu2() {
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
        sx={{ color: "black" }}
      >
        エリア別
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
          <Link href="/areas/オーストラリア">オーストラリア</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/areas/オマーン">オマーン</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/areas/クック諸島">クック諸島</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/areas/U.A.E">U.A.E</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
