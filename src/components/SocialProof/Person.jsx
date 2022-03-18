import React from "react"

import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"

import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

const Person = (props) => {
  const { name, quote } = props
  return (
    <Grid item md={4}>
      <Paper sx={{ p: 4 }} elevation={3}>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <FormatQuoteIcon fontSize="large" />
          <Typography>{quote}</Typography>
          <Typography>{name}</Typography>
        </Stack>
      </Paper>
    </Grid>
  )
}

export default Person
