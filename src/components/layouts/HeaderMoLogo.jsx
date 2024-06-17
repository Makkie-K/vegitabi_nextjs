import React from "react";
import Box from "@mui/material/Box";
import Link from "/src/components/utils/Link";
import { Button } from "@mui/material";

export default function HeaderMoLogo() {
  return (
    <Box>
      <Button component={Link} href="/" sx={{ color: "rgba(0, 0, 0, 0.87)" }}>
        <img
          src="/images/homes/vegitabi-logo4.png"
          alt="Vegitabi.com"
          style={{ height: 40 }}
        />
      </Button>
      {/* <div>Vegitabi.com</div> */}
    </Box>
  );
}
