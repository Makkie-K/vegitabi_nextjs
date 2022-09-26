import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import Table from "@mui/material/Table";

const options = {
  overrides: { table: { component: Table } },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
