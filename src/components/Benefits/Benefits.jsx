import React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const Benefits = () => {
  return (
    <React.Fragment>
      <Box>
        <Container maxWidth="md">
          <Stack direction="row">
            <img src="https://source.unsplash.com/random" alt="" width="300" />
            <Stack direction="column">
              <Typography variant="h3">The top products from the top brands.</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "grey.100" }}>
        <Container maxWidth="md">
          <Stack direction="row">
            <Stack direction="column">
              <Typography variant="h3">The top products from the top brands.</Typography>
            </Stack>
            <img src="https://source.unsplash.com/random" alt="" width="300" />
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="md">
          <Stack direction="row">
            <img src="https://source.unsplash.com/random" alt="" width="300" />
            <Stack direction="column">
              <Typography variant="h3">The top products from the top brands.</Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default Benefits
