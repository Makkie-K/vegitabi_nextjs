import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CategoriesCard(props) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="422"
          image={props.image}
          alt={props.name}
        />
        <CardContent
          sx={{
            position: "absolute",
            width: "80%",
            backgroundColor: "#fff",
            opacity: "0.8",
            left: "50%",
            top: "50%",
            // bottom: "-3%",
            // height: "25%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ marginBottom: 0 }}
          >
            {props.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
