import Stepper from '@/components/Stepper'
import React from 'react'

import styled from '@emotion/styled'
import { Container as MuiContainer, Box, Stack } from '@material-ui/core'
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
      title: 'Office Syndrome คืออะไร?',
      image: '/content/1.jpg',
    },
    {
      title: 'เคล็ดลับ การบรรเทา Office Syndrome',
      image: '/content/2.jpg',
    },
    {
      title: 'จะนั่งจะยืนยังไงให้ หลังชนะ?',
      image: '/content/3.jpg',
    },
  ]

  const specialContents: BlogBlockProps[] = [
    {
      title: 'เทรนเนอร์แบมแบมยอมรับเคยเป็น Office Syndrome แต่หายได้ด้วยวิธี.... ',
      image: '/content-ex/1.png',
    },
    {
      title: 'รู้หรือไม่ ? ไม่ต้องนั่งทำงานก็เป็น Office Syndrome ได้ หากคุณมีพฤติกรรมแบบนี้',
      image: '/content-ex/2.png',
    },
    {
      title: '4 วิธีจัดโต๊ะทำงาน ที่นั่งกี่ชั่วโมง ก็ไม่เมื่อย !',
      image: '/content-ex/3.png',
    },
  ]

  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          บทความ
        </Typography>
        <Box mb={4}>
          <Typography variant="h6">หัวข้อ</Typography>
          <Stack flexWrap="wrap" direction="row">
            {normalContents.map((props, index) => (
              <BlogBlock key={`nor-${index}`} {...props} />
            ))}
          </Stack>
        </Box>
        <Box mb={4}>
          <Typography variant="h6">หัวข้อพิเศษ</Typography>
          <Stack flexWrap="wrap" direction="row">
            {specialContents.map((props, index) => (
              <BlogBlock key={`spe-${index}`} {...props} />
            ))}
          </Stack>
        </Box>
      </Container>
    </>
  )
}
