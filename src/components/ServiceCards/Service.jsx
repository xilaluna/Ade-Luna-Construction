import React from "react"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Service = (props) => {
  const { service, description } = props
  return (
    <Grid item>
      <Typography>{service}</Typography>
      <Typography>{description}</Typography>
    </Grid>
  )
}

export default Service
