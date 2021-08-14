import { Typography, Box, Stack, Avatar } from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import Button from '@/components/Button'
import Link from 'next/link'

const StyledButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing(1, 5)};
`

interface LevelProps {
  level: 1 | 2 | 3 | 4 | 5
}

const levelText = ['ไม่ตึงเลย', 'ไม่ค่อยตึง', 'ตึงนิดๆ', 'ตึงมาก', 'ตึงที่สุด']

const Level: React.FC<LevelProps> = ({ level }) => {
  const Face = () => {
    return <Avatar src={`/face/fa${level}.svg`} />
  }
  return (
    <Stack alignItems="center">
      <Face />
      <Typography>{levelText[level - 1]}</Typography>
    </Stack>
  )
}
const SmallAvatar = styled(Avatar)`
  transform: scale(0.7);
`

const ImageEx: React.FC<{ item: number }> = ({ item }) => {
  const label = [
    'ก้มแตะข้อเท้า ขาเหยียดตรง',
    'ยกมือชิดหูยืดตัวไปด้านข้าง',
    'ดึงไหล่ กดแขนเข้าลำตัว',
    'ดึงศอก แขนชิดใบหู',
  ]
  return (
    <Box>
      <Image src={`/assets/ex${item}.jpg`} alt="" width="240" height="240" />
      <Typography align="center">{label[item - 1]}</Typography>
      <Stack spacing={0} justifyContent="center" direction="row">
        <SmallAvatar src={`/face/fa${5}.svg`} />
        <SmallAvatar src={`/face/fa${4}.svg`} />
        <SmallAvatar src={`/face/fa${3}.svg`} />
        <SmallAvatar src={`/face/fa${2}.svg`} />
        <SmallAvatar src={`/face/fa${1}.svg`} />
      </Stack>
    </Box>
  )
}

interface PainQuestion2Props {}

export default function PainQuestion2({}: PainQuestion2Props) {
  return (
    <>
      <Box mt={2}>
        <Typography variant="h6" align="center">
          ลองทำแต่ละท่าแล้วรู้สึกยังไงบ้าง
        </Typography>
      </Box>
      <Box mt={4}>
        <Stack spacing={5} justifyContent="center" direction="row">
          <Level level={5} />
          <Level level={4} />
          <Level level={3} />
          <Level level={2} />
          <Level level={1} />
        </Stack>
        <Stack spacing={5} justifyContent="center" direction="row" style={{ marginTop: 30 }}>
          <ImageEx item={1} />
          <ImageEx item={2} />
          <ImageEx item={3} />
          <ImageEx item={4} />
        </Stack>
      </Box>
      <Stack direction="row" spacing={4} justifyContent="center" style={{ marginTop: 100 }}>
        <Link href="/start/1" passHref>
          <StyledButton variant="outlined">ย้อนกลับ</StyledButton>
        </Link>
        <Link href="/start/3" passHref>
          <StyledButton variant="contained" style={{ color: 'white' }}>
            ตกลง
          </StyledButton>
        </Link>
      </Stack>
    </>
  )
}
