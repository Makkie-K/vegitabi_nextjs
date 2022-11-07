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

// export function ImageMenu({ id, num }) {
//   const alt = `menu-${num}`;
//   const src = `/images/menus/${id}/${num}.webp`;
//   return (
//     <Image
//       src={src}
//       width={768}
//       height={1133}
//       alt={alt}
//       layout="intrinsic"
//       quality={85}
//     />
//   );
// }

export default function BasicModal({ id, fileCount }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let menus = [];
  for (let i = 1; i < fileCount; i++) {
    menus[i] = { id: id, num: i };
  }
  // console.log(menus);
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

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import Image from "next/image";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   // width: "768px",
//   // height: "1110px",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   // p: 4,
// };

// const num = 4;

// export default function BasicModal({ fileCount }) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   // const menus = [1, 2, 3, 4];
//   const menus = [
//     "/images/menus/1/1.webp",
//     "/images/menus/1/2.webp",
//     "/images/menus/1/3.webp",
//     "/images/menus/1/4.webp",
//   ];
//   return (
//     <div>
//       <Button onClick={handleOpen}>menu</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box
//           sx={{
//             margin: "20px auto",
//             padding: { xs: 0, md: "20px" },
//             width: { xs: "89%", md: "768px" },
//             height: { xs: "93%", md: "93%" },
//             overflow: "scroll",
//             bgcolor: "#fff",
//           }}
//         >
//           {/* <ImageMenu fileCount={fileCount} /> */}
//           {/* <ImageMenu fileCount={fileCount} /> */}
//         </Box>
//       </Modal>
//     </div>
//   );
// }
