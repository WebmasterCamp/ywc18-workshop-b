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

  return (
    <>
      <Container maxWidth="md" sx={{ marginBottom: 20 }}>
        <Typography variant="h4" color="primary" sx={{ marginBottom: 2 }}>
          บทความ
        </Typography>
        <Image src={MainImage} alt="icon" width="1248" height="511" loading="lazy" />
        <Typography variant="h4" color="primary" sx={{ marginTop: 2, marginBottom: 2 }}>
          Office Syndrome คืออะไร?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          โรคออฟฟิศซินโดรม (Office Syndrome ) หรืออาการปวดกล้ามเนื้อและพังผืด เป็นอาการที่มีจากการใช้กล้ามเนื้อ หรือ
          การทำสิ่งเดิม ๆ เป็นระยะเวลานาน ๆ ยกตัวอย่างเช่น การนั่งเล่นโทรศัพท์นาน ๆ โดยก้มคอมอง
          หรือการนั่งทำงานเป็นเวลานานเกินไป โดยไม่ได้ผ่อนคลาย หรือเปลี่ยนรูปแบบการนั่ง ทำให้มีอาการปวด
          รวมไปถึงอาการชาร่วมด้วย ซึ่งอาการอาจจะลุุกลามเป็นอาการปวดเรื้อรัง การดูแลอาการตั้งแต่เนิ่น ๆ
          จะลดความเสี่ยงในการเกิดของอาการหรือโรค โรคออฟฟิศซินโดรม
        </Typography>

        <Typography variant="h6" color="primary" sx={{ marginTop: 2, marginBottom: 2 }}>
          อาการ
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          มีอาการปวดตามส่วนต่าง ๆเฉพาะส่วน เช่น ไหล่ หอ บ่า มีอาการปวดเป็นวงกว้าง หรือบริเวณใกล้เคียง
          ความปวดของกล้ามเนื้อจะมีความปวดตั้งแต่เล็กน้อยจนไปถุงปวกระดับรุนแรงและทรมาน
          อาการของระบบประสาทอัตโนมัติพบร่วมด้วย เช่น ซ่า วูบ เย็น ซีด ขนลุก และเหงื่อออก ตามจุดที่มีอาการปวดหรือชา
          ถ้าเกิดบริเวณคออาจจจะมีอาการตาพร่า หูอื้อหรือมึนงง มีอาการชา เนื่องจากถูกกดทับ เช่น มือและแขน มีอาการอ่อนแรง
          หรือถูกกดทับนานเกินไป
        </Typography>

        <Typography variant="h6" color="primary" sx={{ marginTop: 2, marginBottom: 2 }}>
          การรักษาและการบรรเทา
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          หากมีอาการ โรคออฟฟิศซินโดรม ควรได้รับการรักษาโดยแพทย์เวชศาสตร์ฟื้นฟูที่มีความเชี่ยวชาญด้านการักษาอาการ
          ปวดกล้ามเนื้อ โดยการรักษาจะทำการวินิจฉัย จากแพทย์ และหาทางเลือกในการรักษาที่เหมาะสมของแต่ละบุคคล
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          1.การรักษาด้วยทางกายภาพบำบัด ด้วยอุปกรณ์ที่ทันสมัย
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          2.การฝั่งเข็ม
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          3.การยืดกล้ามเนื้อที่ถูกวิธีด้วยตัวเอง
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          4.การนวดแผนไทย
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          5.การรับประทานยา
        </Typography>

        <Typography variant="h6" color="primary" sx={{ marginTop: 2, marginBottom: 2 }}>
          การป้องกันการเกิดออฟฟิตซินโดม
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          1.การออกกำลังกายที่ถูกท่าถูกวิธี ที่เหมาะสมกับอาการ เช่น การออกกำลังกายเพื่อเสริมความเเข็งแรงของกลามเนื้อ
          การออกกำลังการเพื่อเพิ่มความยืดหยุ่นให้กับกล้ามเนื้อ
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          2.การเปลี่ยนพฟติกรรมการใช้งานกล้ามเนื้อให้เหมาะสม เช่น ในระหว่างทำงานควรยืดก้ามเนื้อ ทุกๆ1 ชม.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, fontFamily: 'Sarabun' }}>
          3.การปรับสภาพแวดล้อมในการทำงาน เช่นการเปลี่ยนโต๊ะหรือเก้าอี้ การปรับระดับความสูงของโต๊ะและเก้าอี้
          ปรับหน้าจอให้อยู่ระดับสายตาต่ออผู้ใช้งาน
        </Typography>
      </Container>
    </>
  )
}
