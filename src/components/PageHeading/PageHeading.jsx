import React from "react"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

const PageHeading = (props) => {
  const { heading } = props
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 20,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          borderLeft: 1,
          borderColor: "primary.main",
          borderWidth: "8px",
          lineHeight: 1,
          pl: 0.5,
          fontWeight: 500,
        }}
      >
        {heading}
      </Typography>
    </Container>
  )
}

export default PageHeading
