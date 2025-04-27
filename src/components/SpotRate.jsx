import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSpotRate } from "../context/SpotRateContext";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const SpotRate = () => {
  const { goldData, silverData } = useSpotRate();

  const getBackgroundColor = (change) => {
    if (change === "up") {
      return "green"; // Green color for increase
    } else if (change === "down") {
      return "red"; // Red color for decrease
    }
    return ""; // White color for no change
  };

  const getColor = (change) => {
    if (change === "up") {
      return "white"; // Green color for increase
    } else if (change === "down") {
      return "white"; // Red color for decrease
    }
    return "white"; // Default color for no change
  };

  const renderSpotSection = (metal, data) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Change to column for separate heading and spot rate box
        alignItems: "center",
        gap: "1.5vw",
      }}
    >
      {/* Spot rate section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          boxShadow: "2px 2px 10px #424242",
          border: "2px solid #D2AD36",
          padding: "1vw 2vw",
          borderRadius: "10px",
          width: "100%",
          // background: "rgba(0, 0, 0, 0.2)", // Translucent black
          // backdropFilter: "blur(5px)", // Blur effect
          // WebkitBackdropFilter: "blur(10px)", // For Safari support
          // color: "#FFF", // Light text color for contrast
        }}
      >
        <Box className="flex flex-row items-center">
          <Typography
            sx={{ color: "#FFFFFF", fontSize: "2.1vw", fontWeight: "600" }}
          >
            {metal.toUpperCase()}
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "1.2vw",
              fontWeight: "600",
              marginTop: "10px",
            }}
          >
            OZ
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px",
              borderRadius: "8px",
              fontSize: "2.8vw",
              fontWeight: "bold",
              margin: "0.5vw 0",
              color: getColor(data.bidChanged),
              backgroundColor: getBackgroundColor(data.bidChanged),
              border: "3px solid #FFFFFF",
              width: "12vw",
            }}
          >
            {data.bid}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
              borderRadius: "5px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.3vw",
                color: "white",
                fontWeight: "bold",
                marginLeft: "0.5vw",
              }}
            >
              LOW {data.low}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "6px",
              borderRadius: "8px",
              fontSize: "2.8vw",
              fontWeight: "bold",
              margin: "0.5vw 0",
              color: getColor(data.askChanged),
              backgroundColor: getBackgroundColor(data.bidChanged),
              border: "3px solid #FFFFFF",
              width: "12vw",
            }}
          >
            {data.ask}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "green",
              borderRadius: "5px",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.3vw",
                color: "white",
                fontWeight: "bold",
                marginLeft: "0.5vw",
              }}
            >
              HIGH {data.high}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      className="mx-auto rounded-lg text-center"
      sx={{
        maxWidth: "100%",
        marginTop: "20px",
      }}
    >
      <Box
        className="flex flex-row items-center justify-between w-full pl-9 pr-9 p-1 mb-4"
        sx={{
          background:
            "linear-gradient(to right, rgba(178, 129, 44, 1) 0, rgba(244, 222, 98, 1) 28%, rgba(244, 226, 139, 1) 51%, rgba(244, 222, 98, 1) 71%, rgba(178, 129, 44, 1) 100%);",
          borderRadius: "10px",
        }}
      >
        {/* Label section */}
        <Typography
          sx={{
            fontSize: "1.8vw",
            fontWeight: "bold",
            color: "black",
          }}
        >
          SPOT RATE
        </Typography>

        <Box className="flex flex-row items-center justify-center">
          <Typography
            sx={{
              fontSize: "1.5vw",
              fontWeight: "bold",
              color: "black",
              marginLeft: "-200px"
            }}
          >
            BID
          </Typography>
          <Box
            className="flex justify-center items-center"
            sx={{
              marginLeft: "0.5vw",
              backgroundColor: "black",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              fontSize: "1.4vw",
              fontWeight: "600",
              color: "white",
            }}
          >
            <i class="fa-solid fa-dollar-sign"></i>
          </Box>
        </Box>

        <Box className="flex flex-row items-center justify-center">
          <Typography
            sx={{
              fontSize: "1.5vw",
              fontWeight: "bold",
              color: "black",
              marginLeft: "-180px"
            }}
          >
            ASK
          </Typography>
          <Box
            className="flex justify-center items-center"
            sx={{
              marginLeft: "0.5vw",
              backgroundColor: "black",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              fontSize: "1.4vw",
              fontWeight: "600",
              color: "white",
            }}
          >
            <i class="fa-solid fa-dollar-sign"></i>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1vw" }}>
        {renderSpotSection("gold", goldData)}
        {renderSpotSection("silver", silverData)}
      </Box>
    </Box>
  );
};

export default SpotRate;
