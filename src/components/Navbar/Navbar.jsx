import React from "react"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"

import { Link as RouterLink } from "react-router-dom"

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg" disableGutters>
        <Toolbar disableGutters>
          <Link
            variant="h6"
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
            sx={{ flexGrow: 1 }}
          >
            Ade Luna Construction
          </Link>
          <Button component={RouterLink} to="/" color="inherit">
            Home
          </Button>
          <Button component={RouterLink} to="/about" color="inherit">
            About
          </Button>
          <Button component={RouterLink} to="/services" color="inherit">
            Services
          </Button>
          <Button component={RouterLink} to="/projects" color="inherit">
            Projects
          </Button>
          <Button component={RouterLink} to="/contact" color="inherit">
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
