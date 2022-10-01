import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "768px",
  // height: "1110px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
};

export default function BasicModal({ menu }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>menu</Button>
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
          {menu.map((m) => (
            <Image src={m} width={768} height={1133} />
          ))}
        </Box>
      </Modal>
    </div>
  );
}
export function ImageMenu() {
  // const src1 = "/images/menus/1/berryPatch_menu10.webp";
  // return <Image src={src1} width={768} height={1133} />;
}
