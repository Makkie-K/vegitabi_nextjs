/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Link from "/src/components/utils/Link";
import { menusArea } from "/src/lib/navigation";
import { menusCategory } from "/src/lib/navigation";
import { useRouter } from "next/router";

export default function HeaderMoMenu() {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (router.query.keyword) {
      setKeyword(router.query.keyword);
    }
  }, [router.query.keyword]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleOpenMenu = (e) => {
    setOpen(!open);
  };

  const handleCloseMenu = (e) => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    // enterを押したときに改行するのを防ぐため
    e.preventDefault();
    if (keyword.trim() === "") {
      // キーワードが空の場合、アラートを表示するか、単に何もしない
      alert("検索キーワードを入力してください");
      return;
    }
    router.push({
      pathname: "/search",
      query: { keyword: keyword },
    });
    handleCloseMenu();
  };

  return (
    <div>
      <MenuIcon
        onClick={handleOpenMenu}
        style={{
          fontSize: "42px",
          color: "f39435",
          marginTop: "6px",
        }}
      />
      {open && (
        <Box
          className="mobile-header-menu"
          sx={{
            position: "absolute",
            top: "64px",
            left: "0px",
            zIndex: "100",
            background: "white",
            width: "100vw",
            overflowY: "auto",
            maxHeight: "calc(100vh - 64px)",
          }}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>カテゴリー</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {menusCategory.map(({ text, url }) => (
                  <Link
                    key={url} // ユニークなキーを設定する
                    href={`/categories/${url}`}
                    onClick={handleCloseMenu}
                    sx={{
                      height: "32px",
                      color: "rgb(0,0,0,0.87)",
                      textDecoration: "none",
                      paddingLeft: "16px",
                      display: "block",
                    }}
                  >
                    {text}
                  </Link>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>エリア</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {menusArea.map(({ text, url }) => (
                  <Link
                    key={url} // ユニークなキーを設定する
                    href={`/areas/${url}`}
                    onClick={handleCloseMenu}
                    sx={{
                      height: "32px",
                      color: "rgb(0,0,0,0.87)",
                      textDecoration: "none",
                      // background: "red",
                      paddingLeft: "16px",
                      display: "block",
                    }}
                  >
                    {text}
                  </Link>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Box
            sx={{
              borderTop: "1px solid rgb(211, 211, 211)",
              borderBottom: "1px solid rgb(211, 211, 211)",
              height: "48px",
              display: "flex",
            }}
          >
            <Link
              key={"columns"} // ユニークなキーを設定する href={`/categories/${url}`}
              href={"/columns"}
              onClick={handleCloseMenu}
              sx={{
                padding: "16px calc(100vw - 80px) 16px 16px",
                textDecoration: "none",
                color: "rgb(0, 0, 0, 0.87)",
              }}
            >
              コラム
            </Link>
          </Box>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              placeholder="検索"
              variant="outlined"
              size="normal"
              fullWidth
              InputProps={{ endAdornment: <SearchIcon /> }}
              onChange={handleChange}
              value={keyword}
            />
          </Box>
        </Box>
      )}
    </div>
  );
}
