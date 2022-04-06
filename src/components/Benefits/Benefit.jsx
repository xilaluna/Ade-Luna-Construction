import React from "react"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const Benefit = (props) => {
  const { color, heading, subtitle, direction } = props
  return (
    <Box sx={{ backgroundColor: color }}>
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Stack
          direction={direction}
          justifyContent="center"
          alignItems="center"
          spacing={12}
        >
          <img src="https://source.unsplash.com/random" alt="" width="400" />
          <Stack direction="column">
            <Typography variant="h3">{heading}</Typography>
            <Typography variant="p" color="text.secondary">
              {subtitle}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Benefit
