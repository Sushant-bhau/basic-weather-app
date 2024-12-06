import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterDramaTwoToneIcon from "@mui/icons-material/FilterDramaTwoTone";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSearchClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      alert(
        "We need to access your location to fetch the current weather data."
      );
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Fetch the city name using reverse geocoding or update the placeholder directly
          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
            .then((response) => response.json())
            .then((data) => {
              const city = data.city || data.locality || "Unknown location";
              setSearchCity(city);
              onSearch(city);
            })
            .catch((error) =>
              console.error("Error fetching the city name:", error)
            );
        },
        (error) => {
          console.error("Error getting the location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <nav
      style={{
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        padding: "10px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginLeft: "40px",
        }}
      >
        <TextField
          id="city-input"
          variant="outlined"
          placeholder="Search city "
          size="small"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          style={{
            backgroundColor: "white",
            borderRadius: "2rem",
            width: "22rem",
            marginLeft: "30px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearchClick}
          style={{ borderRadius: "6px", backgroundColor: "#FF7F50" }}
        >
          Search
        </Button>
      </div>
      <div
        style={{
          fontSize: "16px",
          fontWeight: "700",
          backgroundColor: "#FF7F50",
          height: "35px",
          width: "150px",
          color: "white",
          gap: "2px",
          borderRadius: "6px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={handleCurrentLocationClick}
      >
        <GpsFixedIcon />
        <p
          style={{
            fontSize: "14px",
          }}
        >
          Current Location
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
