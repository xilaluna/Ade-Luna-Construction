import React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

import { Link as RouterLink } from "react-router-dom"

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",

        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="primary.contrastText"
          gutterBottom
        >
          Ade Luna Construction
        </Typography>
        <Typography variant="h5" align="center" color="grey.300" paragraph>
          Something short and leading about the collection below—its contents, the
          creator, etc. Make it short and sweet, but not too short so folks don&apos;t
          simply skip over it entirely.
        </Typography>
        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
          <Button component={RouterLink} to="/about" variant="contained">
            Learn More
          </Button>
          <Button component={RouterLink} to="/contact" variant="contained">
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
