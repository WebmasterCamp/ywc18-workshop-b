import React from 'react'
import { Stepper as MuiStepper, Step as MuiStep, StepLabel as MuiStepLabel } from '@material-ui/core'

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
  const steps = ['Select the symtoms you have', 'Let’s do a quick self-check', 'Finally, Get to know your goal !']

  return (
    <MuiStepper activeStep={parseInt(index) - 1} alternativeLabel>
      {steps.map((label) => (
        <MuiStep key={label}>
          <StyledMuiStepLabel>{label}</StyledMuiStepLabel>
        </MuiStep>
      ))}
    </MuiStepper>
  )
}
