import React from "react"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

import ServiceCards from "../components/ServiceCards/ServiceCards"

const Services = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" sx={{ textAlign: "center", py: 4 }}>
        Services
      </Typography>
      <Container maxWidth="md">
        <ServiceCards />
      </Container>
    </React.Fragment>
  )
}

export default Services
