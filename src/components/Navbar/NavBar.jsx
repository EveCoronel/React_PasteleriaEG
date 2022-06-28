import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./Logo";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const pages = ["Postres", "Dulces", "Recetas"];

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
          <Logo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
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
                  <Link className="linkNavcomp" to="/contacto">
                    <Button sx={{ my: 2, color: "black", display: "block" }}>
                      Contacto
                    </Button>
                  </Link>
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
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Productos
              </Button>
            </Link>

            <Link className="linkNav" to="/category/Cajasdulces">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Cajas dulces
              </Button>
            </Link>

            <Link className="linkNav" to="/category/Tortasdecoradas">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Tortas decoradas
              </Button>
            </Link>

            <Link className="linkNav" to="/category/Postres">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Postres
              </Button>
            </Link>

            <Link className="linkNav" to="/contacto">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Contacto
              </Button>
            </Link>
          </Box>
          <Link className="linkNav" to={'/cart'}>
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
