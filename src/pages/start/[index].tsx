import Stepper from '@/components/Stepper'
import React from 'react'

import styled from '@emotion/styled'
import { Container as MuiContainer } from '@material-ui/core'
import BackToHome from '@/components/BackToHome'
import PainQuestion1 from '@/components/PainQuestion1'
import { useRouter } from 'next/dist/client/router'
import PainQuestion3 from '@/components/PainQuestion3'
import PainQuestion2 from '@/components/PainQuestion2'

const Container = styled(MuiContainer)`
  margin-top: ${({ theme }) => theme.spacing(3)};
`

export default function StartPage() {
  const router = useRouter()
  const { index } = router.query

  const QuestionCase = () => {
    switch (index) {
      case '1':
        return <PainQuestion1 />
      case '2':
        return <PainQuestion2 />
      case '3':
        return <PainQuestion3 />
      default:
        return <>Not Found</>
    }
  }

  console.log(index)

  return (
    <>
      <BackToHome />
      <Container maxWidth="md">
        <Stepper index={index as string} />
        <QuestionCase />
      </Container>
    </>
  )
}
