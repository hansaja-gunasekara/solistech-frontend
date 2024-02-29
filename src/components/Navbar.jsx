import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <AppBar sx={{ bgcolor: "#E5E4E2" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {" "}
          {/* Use justifyContent: 'space-between' */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                display: { xs: "none", md: "flex" },
                marginRight: "8px",
                width: "40px",
                height: "40px",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#343434",
                textDecoration: "none",
              }}
            >
              SOLIS TECH
            </Typography>
          </div>
          <Link to="/Register" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Register Employee
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
