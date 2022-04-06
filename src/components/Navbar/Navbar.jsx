import React from "react"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import { NavLink as NavLinkBase } from "react-router-dom"

const classes = {
  activeLink: "activeLink",
}

const NavLink = React.forwardRef((props, ref) => (
  <NavLinkBase ref={ref} {...props} className={props.activeClassName} />
))

const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link
            variant="h6"
            component={NavLink}
            to="/"
            color="inherit"
            underline="none"
          >
            Ade Luna Construction
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            component={NavLink}
            sx={{ color: "#8C8C8C" }}
            to="/"
            color="inherit"
            activeClassName={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
          >
            Home
          </Button>
          <Button
            sx={{ color: "#8C8C8C" }}
            component={NavLink}
            to="/about"
            color="inherit"
            activeClassName={({ isActive }) =>
              isActive ? classes.activeLink : undefined
            }
          >
            About
          </Button>
          <Button component={NavLink} to="/services" color="inherit">
            Services
          </Button>
          <Button component={NavLink} to="/projects" color="inherit">
            Projects
          </Button>
          <Button component={NavLink} to="/contact" color="inherit">
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
