import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "/src/components/utils/Link";
import Box from "@mui/material/Box";

export default function AlignItemsList() {
  return (
    <Box sx={{ display: "flex" }}>
      <div>photo</div>
      <div>text</div>
    </Box>
  );
}
