import Button from '@/components/Button'
import Pain from '@/components/Pain'
import { Stack } from '@material-ui/core'
import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

interface PainQuestion3Props {}

const StyledButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(1, 5)};
`

export default function PainQuestion3({}: PainQuestion3Props) {
  const questions = ['1-2 ครั้ง', '3-4 ครั้ง', '5-6 ครั้ง', '7-8 ครั้ง']

  return (
    <Stack spacing={8} style={{ marginTop: 32 }}>
      <Stack direction="row" spacing={4}>
        <Pain header="คุณต้องการยืดกี่ครั้งต่อวัน" questions={questions} />
      </Stack>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Link href="/start/2" passHref>
          <StyledButton variant="outlined">ย้อนกลับ</StyledButton>
        </Link>
        <Link href="/game" passHref>
          <StyledButton variant="contained" style={{ color: 'white' }}>
            ตกลง
          </StyledButton>
        </Link>
      </Stack>
    </Stack>
  )
}
