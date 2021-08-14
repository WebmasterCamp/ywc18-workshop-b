import { Stack, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import OtherButton from '@/components/Button'

interface ButtonProps {
  isClicked: boolean
}

const ButtonClickable = styled.div`
  padding: ${({ theme }) => theme.spacing(1, 3)};
  min-width: 200px;
  cursor: pointer;
  transition: background 0.25s ease;
  border-radius: 12px;
  box-shadow: 1px 5px 20px rgba(173, 187, 200, 0.4);
`

const ButtonClickableTrue = styled.div`
  padding: ${({ theme }) => theme.spacing(1, 3)};
  min-width: 200px;
  cursor: pointer;
  transition: background 0.25s ease;
  border-radius: 12px;
  box-shadow: 1px 5px 20px rgba(173, 187, 200, 0.4);
  background: #ffcfa3;
`

const Painnnn: React.FC<{ header: string; items: string[] }> = ({ header, items }) => {
  const [state, setState] = useState<number>(7)

  const handleClick = (index: number) => () => {
    console.log(state, index)
    setState(index)
  }

  return (
    <>
      <Typography variant="h6" align="center" color="primary">
        {header}
      </Typography>
      <Stack spacing={2} alignItems="center">
        {items.map((item, index) => {
          if (state !== index + 1)
            return (
              <ButtonClickable key={index} onClick={handleClick(index + 1)}>
                <Typography align="center">{item}</Typography>
              </ButtonClickable>
            )
          else
            return (
              <ButtonClickableTrue key={index} onClick={handleClick(index + 1)}>
                <Typography align="center">{item}</Typography>
              </ButtonClickableTrue>
            )
        })}
      </Stack>
    </>
  )
}

interface PainQuestion3Props {}

const StyledButton = styled(OtherButton)`
  padding: ${({ theme }) => theme.spacing(1, 5)};
`

export default function PainQuestion3({}: PainQuestion3Props) {
  const items = ['1-2 ครั้ง', '3-4 ครั้ง', '5-6 ครั้ง', '7-8 ครั้ง']

  return (
    <Stack spacing={8} style={{ marginTop: 32 }}>
      <Stack spacing={1}>
        <Painnnn header="คุณต้องการยืดกี่ครั้งต่อวัน" items={items} />
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
