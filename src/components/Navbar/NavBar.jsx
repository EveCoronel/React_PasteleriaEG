import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./Logo";
import "./NavBar.css";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="navBar">
      <Container className="navBar" maxWidth="false">
        <Toolbar disableGutters>
          <Link to={'/'} >
          <Logo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </Link>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "poppins",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link className="linkNav" to={"/"}>
              EG Pastelería
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography>
                  {" "}
                  <Link className="linkNavcomp" to="/">
                    <Button sx={{ my: 2, color: "black", display: "block" }}>
                      Productos
                    </Button>
                  </Link>
                  <Link className="linkNavcomp" to="/category/Cajasdulces">
                    <Button sx={{ my: 2, color: "black", display: "block" }}>
                      {" "}
                      Cajas dulces{" "}
                    </Button>
                  </Link>
                  <Link className="linkNavcomp" to="/category/Tortasdecoradas">
                    <Button sx={{ my: 2, color: "black", display: "block" }}>
                      Tortas decoradas
                    </Button>
                  </Link>
                  <Link className="linkNavcomp" to="/category/Postres">
                    <Button sx={{ my: 2, color: "black", display: "block" }}>
                      Postres
                    </Button>
                  </Link>{" "}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* <Logo sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link className="linkNav" to={"/"}>
              EG Pastelería
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/*  {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}

            <Link className="linkNav" to="/">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Productos
              </Button>
            </Link>

            <Link className="linkNav" to="/category/Cajasdulces">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Cajas dulces
              </Button>
            </Link>

            <Link className="linkNav" to="/category/Tortasdecoradas">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Tortas decoradas
              </Button>
            </Link>

            <Link className="linkNav" to="/category/Postres">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Postres
              </Button>
            </Link>
          </Box>
          <Link className="linkNav" to={"/cart"}>
            <Box sx={{ flexGrow: 0 }}>
              <CartWidget items={0} />
            </Box>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
