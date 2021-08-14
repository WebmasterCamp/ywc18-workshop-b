import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Typography } from '@material-ui/core'

interface ClickableProps {
  label: string
}

interface ButtonProps {
  isClicked: boolean
}

const Button = styled.div<ButtonProps>`
  padding: ${({ theme }) => theme.spacing(1, 3)};
  width: 100%;
  cursor: pointer;
  transition: background 0.25s ease;
  border-radius: 12px;
  box-shadow: 1px 5px 20px rgba(173, 187, 200, 0.4);
  ${({ isClicked }) => css`
    background: ${isClicked ? '#FFCFA3' : 'white'};
  `}
`

export default function Clickable({ label }: ClickableProps) {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <Button isClicked={isClicked} onClick={() => setIsClicked((prev) => !prev)}>
      <Typography variant="body1" align="center">
        {label}
      </Typography>
    </Button>
  )
}
