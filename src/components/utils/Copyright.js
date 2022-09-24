import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      // sx={{ paddingLeft: { xs: "18px" } }}
      // sx={{ paddingRight: { md: "40px" } }}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://mui.com/" underline="none">
        {new Date().getFullYear()}. Vegitabi All right reserved
      </MuiLink>{" "}
    </Typography>
  );
}
