import React from "react"

import Grid from "@mui/material/Grid"

import Service from "./Service"
import data from "../../assets/data/service-projects.json"

const ServiceCards = () => {
  const services = data.map((obj) => {
    const { service, description } = obj
    return <Service service={service} description={description} />
  })

  return (
    <Grid container spacing={2}>
      {services}
    </Grid>
  )
}

export default ServiceCards
