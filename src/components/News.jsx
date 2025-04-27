import React from "react";
import { Box, Typography } from "@mui/material";

const NewsTicker = ({ newsItems }) => {
  return (
    <Box
      sx={{
        boxShadow: "2px 2px 10px #424242",
        border: "2px solid #D2AD36",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        height: "50px",
        marginTop: "35px",
      }}
    >
      <Typography
        className="flex justify-center items-center"
        sx={{
          background:
            "linear-gradient(to right, rgba(178, 129, 44, 1) 0, rgba(244, 222, 98, 1) 28%, rgba(244, 226, 139, 1) 51%, rgba(244, 222, 98, 1) 71%, rgba(178, 129, 44, 1) 100%);",
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "1.5vw",
          width: "400px",
          height: "100%",
          borderRadius: "8px",
        }}
      >
        WSG UPDATES
      </Typography>

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "inline-block",
            animation: "scroll 40s linear infinite",
            color: "white",
            fontSize: "2vw",
            textAlign: "center",
          }}
        >
          {newsItems.map((item, index) => (
            <Typography
              key={index}
              component="span"
              sx={{
                marginRight: "4vw",
                display: "inline-block",
                color: "white",
                fontSize: "2vw",
              }}
            >
              {item.description}
            </Typography>
          ))}
        </Box>
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>
    </Box>
  );
};

export default NewsTicker;
