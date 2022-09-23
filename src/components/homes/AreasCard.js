import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function AreasCard(props) {
  // console.log(props.name);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="422"
          image={props.image}
          alt={props.name}
        />
        <CardContent
          sx={{
            // position: "absolute",
            // width: "80%",
            // backgroundColor: "#fff",
            // opacity: "0.8",
            // left: "46px",
            // bottom: "5%",
            // height: "25%",
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
