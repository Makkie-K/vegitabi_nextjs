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
  menuCount,
  filesExist,
  id,
}) {
  const rows = [
    createData("Address", address),
    // <GoogleMap map={map} />,
    createData("Map", <GoogleMap map={map} />),
    createData("Telephone", telephone),
    createData("Business Hours", businessHour),
    createData(
      "URL",
      <Link target="_blank" rel="noopener noreferrer" href={url}>
        Official Website
      </Link>
    ),
    // createData("ウェブサイト", url),
    createData("Others", others),
    createData(
      "Menu",
      filesExist ? null : <ShopModal menuCount={menuCount} id={id} />
    ),
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>{title}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key}>
            <td>{row.key}</td>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
