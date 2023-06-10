/** @jsxImportSource @emotion/react*/ import { GoogleMap } from "/src/components/GoogleMap";
import ShopModal from "/src/components/ShopModal";
import utilStyles from "/src/styles/utils.module.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "/src/components/utils/Link";
import Box from "@mui/material/Box";

function createData(key, value) {
  return {
    key,
    value,
  };
}

export default function ShopInfo({
  map,
  address,
  title,
  telephone,
  url,
  businessHour,
  others,
  menu,
  fileCount,
  id,
}) {
  const rows = [
    createData("店名", title),
    createData("住所", address),
    // <GoogleMap map={map} />,
    createData("地図", <GoogleMap map={map} />),
    createData("電話番号", telephone),
    createData("営業時間", businessHour),
    createData(
      "ウェブサイト",
      <Link target="_blank" rel="noopener noreferrer" href={url}>
        {url}
      </Link>
    ),
    // createData("ウェブサイト", url),
    createData("その他", others),
    createData("メニュー", <ShopModal fileCount={fileCount} id={id} />),
  ];

  return (
    <Box
      sx={{
        border: "solid 1px lightgrey",
      }}
    >
      {rows.map((row) => (
        <Box>
          <Box
            sx={{
              borderBottom: "solid 1px lightgrey",
              padding: "8px",
              backgroundColor: "rgb(245, 245, 245)",
            }}
          >
            <Box>{row.key}</Box>
          </Box>
          <Box sx={{ borderBottom: "solid 1px lightgrey", padding: "8px" }}>
            {row.value}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
