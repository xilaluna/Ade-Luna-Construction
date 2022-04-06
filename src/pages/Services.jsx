import React from "react"

import Container from "@mui/material/Container"
import ServiceCards from "../components/ServiceCards/ServiceCards"
import PageHeading from "../components/PageHeading/PageHeading"

const Services = () => {
  return (
    <React.Fragment>
      <PageHeading heading="Services" />
      <Container maxWidth="md">
        <ServiceCards />
      </Container>
    </React.Fragment>
  )
}

export default Services
