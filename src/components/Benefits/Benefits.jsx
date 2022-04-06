import React from "react"
import Benefit from "./Benefit"

const Benefits = () => {
  return (
    <React.Fragment>
      <Benefit
        color="#ffffff"
        heading="The top products from the top brands."
        subtitle="FastAF delivers to your doorstep in 2 hours or less."
        direction="row"
      />
      <Benefit
        color="#f5f5f5"
        heading="The top products from the top brands."
        subtitle="FastAF delivers to your doorstep in 2 hours or less."
        direction="row-reverse"
      />
      <Benefit
        color="#ffffff"
        heading="The top products from the top brands."
        subtitle="FastAF delivers to your doorstep in 2 hours or less."
        direction="row"
      />
    </React.Fragment>
  )
}

export default Benefits
