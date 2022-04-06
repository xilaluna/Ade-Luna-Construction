import React from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import data from "../../assets/data/testimonials.json"
import Person from "./Person"

const SocialProof = () => {
  return (
    <Box sx={{ backgroundColor: "grey.100", py: 10  }}>
      <Container maxWidth="lg">
        <Typography
          align="center"
          variant="h5"
          component="p"
          sx={{ pb: 4, fontWeight: "bold" }}
        >
          Serviced{" "}
          <Typography
            variant="h5"
            component="span"
            color={"primary"}
            sx={{ fontWeight: "bold" }}
          >
            300+
          </Typography>{" "}
          people all around the Bay Area.
        </Typography>
        <Grid container spacing={4}>
          {data.map((obj) => {
            return <Person {...obj} key={obj.id} />
          })}
        </Grid>
      </Container>
    </Box>
  )
}

export default SocialProof
