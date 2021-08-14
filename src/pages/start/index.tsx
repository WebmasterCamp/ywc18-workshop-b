import Stepper from '@/components/Stepper'
import React from 'react'

import styled from '@emotion/styled'
import { Container as MuiContainer } from '@material-ui/core'
import BackToHome from '@/components/BackToHome'

const Container = styled(MuiContainer)`
  margin-top: ${({ theme }) => theme.spacing(3)};
`

export default function StartPage() {
  return (
    <>
      <BackToHome />
      <Container maxWidth="md">
        <Stepper />
      </Container>
    </>
  )
}
