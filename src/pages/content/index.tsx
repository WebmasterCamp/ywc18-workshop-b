import Stepper from '@/components/Stepper'
import React from 'react'

import styled from '@emotion/styled'
import { Container as MuiContainer, Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { useRouter } from 'next/dist/client/router'
import BlogBlock, { BlogBlockProps } from '@/components/BlogBlock'
import MainImage from '../../../public/content/main.jpg'
import Image from 'next/image'

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
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          บทความ
        </Typography>
        <Image src={MainImage} alt="icon" width="1248" height="511" loading="lazy" />
        <Box mb={4}>
          <Typography variant="h6">หัวข้อ</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            บลาๆๆๆๆ
          </Typography>
          {normalContents.map((props, index) => (
            <BlogBlock key={`nor-${index}`} {...props} />
          ))}
        </Box>
        <Box mb={4}>
          <Typography variant="h6">หัวข้อพิเศษ</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            บลาๆๆๆๆ
          </Typography>
          {specialContents.map((props, index) => (
            <BlogBlock key={`spe-${index}`} {...props} />
          ))}
        </Box>
      </Container>
    </>
  )
}
