import React from "react";
import { Box, Typography } from "@mui/material";
import { Gauge } from "@mui/x-charts";

export default function CustomGauge({ value, max, color }) {
  const percentage = (value / max) * 100;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Gauge
        width={100}
        height={100}
        value={percentage}
        max={100}
        startAngle={0}
        endAngle={360}
        thickness={10}
        text={""}
        colors={{
          arc: "red",
        }}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
        }}
      >
        {Math.round(percentage)}%
      </Typography>
    </Box>
  );
}
