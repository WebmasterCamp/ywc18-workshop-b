import React from 'react'
import styled from '@emotion/styled'
import { Stack } from '@material-ui/core'
import Pain from '@/components/Pain'
import Button from '@/components/Button'
import Link from 'next/link'

interface PainQuestionProps {}

const StyledButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(1, 5)};
`

export default function PainQuestion({}: PainQuestionProps) {
  const questionsA = ['คอ', 'แขน', 'บ่า', 'นิ้ว', 'ไหล่', 'ศอก', 'หัว', 'ขา', 'ตา']
  const questionsB = ['คอ', 'ปลายนิ้ว', 'มือ', 'แขน']
  return (
    <Stack spacing={8} style={{ marginTop: 32 }}>
      <Stack direction="row" spacing={4}>
        <Pain header="ปวด" questions={questionsA} />
        <Pain header="ชา" questions={questionsB} />
      </Stack>
      <Stack direction="row" spacing={4} justifyContent="center">
        <Link href="/start/2" passHref>
          <StyledButton variant="contained" style={{ color: 'white' }}>
            ต่อไป
          </StyledButton>
        </Link>
      </Stack>
    </Stack>
  )
}
