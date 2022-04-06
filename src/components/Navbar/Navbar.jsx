import React from "react"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import { Link as RouterLink } from "react-router-dom"

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link
            variant="h6"
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
          >
            Ade Luna Construction
          </Link>
          <Box sx={{ flexGrow: 1 }} />
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
