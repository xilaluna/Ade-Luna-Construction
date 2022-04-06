import React from "react"

import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

const PageHeading = (props) => {
  const { heading } = props
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 20,
      }}
    >
      <Box sx={{ display: "inline-flex" }}>
        <Typography
          variant="h2"
          sx={{
            borderBottom: 1,
            borderColor: "primary.main",
            borderWidth: "8px",
            fontWeight: 500,
          }}
        >
          {heading}
        </Typography>
      </Box>
    </Container>
  )
}

export default PageHeading
