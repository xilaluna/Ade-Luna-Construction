import React from "react"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import ContactForm from "../components/ContactForm/ContactForm"

const Contact = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" sx={{ textAlign: "center", py: 6 }}>
        Contact
      </Typography>
      <Container maxWidth="md">
        <ContactForm />
      </Container>
    </React.Fragment>
  )
}

export default Contact
