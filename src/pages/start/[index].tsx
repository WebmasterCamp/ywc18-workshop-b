import Stepper from '@/components/Stepper'
import React from 'react'

import styled from '@emotion/styled'
import { Container as MuiContainer } from '@material-ui/core'
import BackToHome from '@/components/BackToHome'
import PainQuestion from '@/components/PainQuestion'
import { useRouter } from 'next/dist/client/router'

const Container = styled(MuiContainer)`
  margin-top: ${({ theme }) => theme.spacing(3)};
`

export default function StartPage() {
  const router = useRouter()
  const { index } = router.query

  const QuestionCase = () => {
    switch (index) {
      case '1':
        return <PainQuestion />
      case '2':
        return <></>
      case '3':
        return <></>
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
