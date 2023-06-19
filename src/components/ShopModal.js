import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";

export function ImageMenu({ id, num }) {
  const alt = `menu-${num}`;
  const src = `/images/menus/${id}/${num}.webp`;
  return (
    <Image
      src={src}
      width={768}
      height={1133}
      alt={alt}
      layout="intrinsic"
      quality={85}
    />
  );
}

export default function BasicModal({ id, fileCount }) {
  if (fileCount === 0) {
    return null; // ファイルが存在しない場合は null を返して終了
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let menus = [];
  for (let i = 1; i < fileCount + 1; i++) {
    menus[i] = { id: id, num: i };
  }

  return (
    <div>
      <Button onClick={handleOpen}>MENU</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            margin: "20px auto",
            padding: { xs: 0, md: "20px" },
            width: { xs: "89%", md: "768px" },
            height: { xs: "93%", md: "93%" },
            overflow: "scroll",
            bgcolor: "#fff",
          }}
        >
          {menus.length > 0 &&
            menus.map((menu) => (
              <ImageMenu key={menu.num} id={menu.id} num={menu.num} />
            ))}
        </Box>
      </Modal>
    </div>
  );
}
