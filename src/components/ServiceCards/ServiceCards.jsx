import React from "react"

import Grid from "@mui/material/Grid"

import Service from "./Service"
import data from "../../assets/data/service-projects.json"

const ServiceCards = () => {
  return (
    <Grid container spacing={2}>
      {data.map((obj) => {
        const { service, description } = obj
        return <Service service={service} description={description} />
      })}
    </Grid>
  )
}

export default ServiceCards
