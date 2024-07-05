import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function AreasCard(props) {
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
            textAlign: "center",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="h5">{props.text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
