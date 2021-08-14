import React from 'react'
import styled from '@emotion/styled'

import Link from 'next/link'
import { Typography, useTheme } from '@material-ui/core'

import { FiChevronLeft } from 'react-icons/fi'

const Container = styled.div`
  background: ${({ theme }) => theme.palette.primary.light};
  padding: ${({ theme }) => theme.spacing(0, 3)};
`

const InnerLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

interface BackToHomeProps {}

export default function BackToHome({}: BackToHomeProps) {
  const theme = useTheme()

  return (
    <Container>
      <Link href="/" passHref>
        <InnerLink>
          <FiChevronLeft color={theme.palette.primary.main} />
          <Typography variant="overline" color="primary">
            Back To home
          </Typography>
        </InnerLink>
      </Link>
    </Container>
  )
}
