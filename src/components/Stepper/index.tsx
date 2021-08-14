import React from 'react'
import { Stepper as MuiStepper, Step as MuiStep, StepLabel as MuiStepLabel, Typography, Box } from '@material-ui/core'

import styled from '@emotion/styled'

const StyledMuiStepLabel = styled(MuiStepLabel)`
  text {
    fill: white;
  }
`

interface StepperProps {
  index: string
}

export default function Stepper({ index }: StepperProps) {
  const inx = parseInt(index) - 1
  const steps = ['เลือกอาการที่คุณมี', 'ไหนลองประเมินตัวเองดูซิ', 'สุดท้ายแล้ว มาตั้งเป้าหมายกัน!']

  return (
    <>
      <MuiStepper activeStep={inx} alternativeLabel>
        {steps.map((label) => (
          <MuiStep key={label}>
            <StyledMuiStepLabel></StyledMuiStepLabel>
          </MuiStep>
        ))}
      </MuiStepper>
      <Box mt={3}>
        <Typography variant="h4" align="center">
          {steps[inx]}
        </Typography>
      </Box>
    </>
  )
}
