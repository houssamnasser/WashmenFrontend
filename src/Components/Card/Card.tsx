import { Button, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { OfficesInRange } from "../../Interfaces/Homepage";
import "./Card.css";

const Card: React.FC<OfficesInRange> = ({ distance, partner, office }) => {
  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {office.location}
        </Typography>

        <hr />
        <Typography variant="h5" component="div">
          {partner.organization}
        </Typography>
        <hr />

        <Typography variant="caption" fontSize={"0.1"}>
          {office.address}
        </Typography>
      </CardContent>

      <div className="distance">
        <Typography color="text.secondary">
          <br />
          {distance} km
        </Typography>
      </div>
    </>
  );
};

export default Card;
