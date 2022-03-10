import React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"

import heroImage from "../../assets/images/hero.jpg"

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
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
          color="text.primary"
          gutterBottom
        >
          Ade Luna Construction
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Something short and leading about the collection below—its contents, the
          creator, etc. Make it short and sweet, but not too short so folks don&apos;t
          simply skip over it entirely.
        </Typography>
        <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
          <Button variant="contained">Learn More</Button>
          <Button variant="outlined">Contact Us</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
