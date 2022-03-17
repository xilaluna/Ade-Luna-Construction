import React from "react"

import Copyright from "./Copyright"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import Container from "@mui/material/Container"

import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        sx={{ py: 8, borderBottom: 1, borderColor: "grey.300" }}
      >
        <Grid item>
          <Typography variant="h6">Explore</Typography>
          <Stack spacing={1}>
            <Link>Lorem</Link>
            <Link>Lorem</Link>
          </Stack>
        </Grid>
        <Grid item>
          <Typography variant="h6">Company</Typography>
          <Stack spacing={1}>
            <Link>Lorem</Link>
            <Link>Lorem</Link>
          </Stack>
        </Grid>
        <Grid item>
          <Typography variant="h6">Services</Typography>
          <Stack spacing={1}>
            <Link>Lorem</Link>
            <Link>Lorem</Link>
          </Stack>
        </Grid>
        <Grid item>
          <Typography variant="h6">Contact</Typography>
          <Stack spacing={1}>
            <Link>Lorem</Link>
            <Link>Lorem</Link>
          </Stack>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{ justifyContent: "center", pt: 8 }}
      >
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </Stack>

      <Copyright sx={{ pt: 4, pb: 6 }} />
    </Container>
  )
}

export default Footer
