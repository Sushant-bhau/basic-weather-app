import React from "react";

// Define the props type for the HighlightBox component

const HighlightBox = ({ title, value, Icon }) => {
  return (
    <div
      style={{
        backgroundColor: "#FF7F50",
        color: "white",
        padding: "1rem",
        borderRadius: "0.5rem",
        width: "250px",
        height: "150px",
        gap: "40px",
      }}
    >
      <div style={{ gap: "20px" }}>
        <div style={{ fontSize: "25px", fontWeight: "bold" }}>{title}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Icon style={{ fontSize: "30px" }} />
          <p style={{ fontSize: "20px" }}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightBox;
