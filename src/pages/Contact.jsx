import React from "react"

import Box from "@mui/material/Box"
import ContactForm from "../components/ContactForm/ContactForm"
import PageHeading from "../components/PageHeading/PageHeading"

const Contact = () => {
  return (
    <React.Fragment>
      <PageHeading heading={"Contact"} />
      <Box sx={{ backgroundColor: "#f5f5f5", py: 10 }}>
        <ContactForm />
      </Box>
    </React.Fragment>
  )
}

export default Contact
