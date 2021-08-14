import Stepper from '@/components/Stepper'
import React from 'react'

import styled from '@emotion/styled'
import { Container as MuiContainer, Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import BlogBlock, { BlogBlockProps } from '@/components/BlogBlock'

const Container = styled(MuiContainer)`
  margin-top: ${({ theme }) => theme.spacing(3)};
`

export default function StartPage() {
  const router = useRouter()
  const { index } = router.query

  const normalContents: BlogBlockProps[] = [
    {
      title: 'title',
      desciption: 'desc',
      image: '/content/1.jpg',
    },
  ]

  const specialContents: BlogBlockProps[] = [
    {
      title: 'title',
      desciption: 'desc',
      image: '/content/1.jpg',
    },
  ]

  return (
    <>
      <Container maxWidth="md">
        <Box mb={4}>
          <Typography variant="h6">หัวข้อ</Typography>
          {normalContents.map((props, index) => (
            <BlogBlock key={`nor-${index}`} {...props} />
          ))}
        </Box>
        <Box mb={4}>
          <Typography variant="h6">หัวข้อพิเศษ</Typography>
          {specialContents.map((props, index) => (
            <BlogBlock key={`spe-${index}`} {...props} />
          ))}
        </Box>
      </Container>
    </>
  )
}
