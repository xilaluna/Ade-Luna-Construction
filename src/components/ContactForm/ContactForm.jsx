import React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const ContactForm = (props) => {
  return (
    <Box component="form" noValidate {...props}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TextField fullWidth id="firstName" label="First Name" variant="outlined" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth id="lastName" label="Last Name" variant="outlined" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth id="email" label="Email" variant="outlined" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth id="phoneNumber" label="Phone Number" variant="outlined" />
        </Grid>
        <Grid item md={12}>
          <TextField
            fullWidth
            multiline
            id="message"
            label="Message"
            variant="outlined"
            rows={5}
          />
        </Grid>
        <Grid item md={12}>
          <Button fullWidth variant="contained">
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContactForm
