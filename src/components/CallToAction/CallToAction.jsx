import React from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact"

import { Link as RouterLink } from "react-router-dom"

const CallToAction = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 12 }}>
      <Box sx={{ textAlign: "center", pb: 2 }}>
        <ConnectWithoutContactIcon sx={{ fontSize: 50 }} />
      </Box>
      <Typography align="center" variant="h3" component="p">
        Lets Talk
      </Typography>
      <Typography align="center" variant="subtitle1" component="p" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam molestias
        repellat culpa nemo quis.
      </Typography>
      <Box sx={{ textAlign: "center", pt: 4 }}>
        <Button component={RouterLink} to="/contact" variant="contained">
          Get in Touch
        </Button>
      </Box>
    </Container>
  )
}

export default CallToAction
