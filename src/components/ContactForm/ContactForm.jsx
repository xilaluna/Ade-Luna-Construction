import React from "react"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"

const ContactForm = (props) => {
  return (
    <Paper sx={{ p: 4 }} elevation={3}>
      <Box component="form" noValidate {...props}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <TextField fullWidth id="firstName" label="First Name" variant="outlined" />
          </Grid>
          <Grid item md={6}>
            <TextField fullWidth id="lastName" label="Last Name" variant="outlined" />
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              variant="outlined"
            />
          </Grid>
          <Grid item md={12}>
            <TextField fullWidth id="email" label="Email" variant="outlined" />
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
            <Button fullWidth variant="contained" size="large">
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default ContactForm
