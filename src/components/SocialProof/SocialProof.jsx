import React from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

import data from "../../assets/data/testimonials.json"
import Person from "./Person"

const SocialProof = () => {
  const people = data.map((obj) => {
    const { name, quote } = obj
    return <Person name={name} quote={quote} />
  })
  return (
    <Container maxWidth="lg">
      <Typography
        align="center"
        variant="h5"
        component="p"
        sx={{ py: 5, fontWeight: "bold" }}
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
      <Grid container spacing={2}>
        {people}
      </Grid>
    </Container>
  )
}

export default SocialProof
