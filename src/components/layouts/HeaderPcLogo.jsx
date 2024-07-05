/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import React from "react";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Link from "/src/components/utils/Link";
import { Button } from "@mui/material";

export default function HeaderPcLogo() {
  const router = useRouter();
  const { asPath, pathname, query } = router;
  const language = pathname.slice(0, 3);
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        {language === "/en" ? (
          <Button
            component={Link}
            href="/en"
            sx={{ color: "rgba(0, 0, 0, 0.87)" }}
          >
            <img
              src="/images/homes/vegitabi-logo4.png"
              alt="Vegitabi.com"
              style={{ height: 40 }}
            />
          </Button>
        ) : (
          <Button
            component={Link}
            href="/"
            sx={{ color: "rgba(0, 0, 0, 0.87)" }}
          >
            <img
              src="/images/homes/vegitabi-logo4.png"
              alt="Vegitabi.com"
              style={{ height: 40 }}
            />
          </Button>
        )}
      </Box>
    </Box>
  );
}
