import React from "react"

import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"

const Copyright = (props) => {
  return (
    <Typography variant="body1" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://adelunaconstruction.com">
        Ade Luna Construction
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default Copyright
