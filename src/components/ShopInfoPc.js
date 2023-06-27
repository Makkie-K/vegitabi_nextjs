/** @jsxImportSource @emotion/react*/ import { GoogleMap } from "/src/components/GoogleMap";
import React, { useState } from "react";
import ShopModal from "/src/components/ShopModal";
import utilStyles from "/src/styles/utils.module.css";
// import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "/src/components/utils/Link";

function createData(key, value) {
  return {
    key,
    value,
  };
}

export default function ShopInfoPc({
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
  const [showModal, setShowModal] = useState(fileCount > 0);
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

    createData(
      "メニュー",
      showModal ? <ShopModal fileCount={fileCount} id={id} /> : null
    ),
  ];

  return (
    <TableContainer
      component={Paper}
      style={{ background: "rgba(220,220,220, 0.3)" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {row.key}
              </TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
