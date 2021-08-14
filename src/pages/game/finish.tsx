/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'

import Button from 'src/components/Button'
import Container from '@material-ui/core/Container'
import { Typography } from '@material-ui/core'

import { css } from '@emotion/css'
import styled from '@emotion/styled'

const TextCenter = styled.div`
  text-align: center;
`

const BaseHeader = styled(Typography)`
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  color: #f98820;

  margin: 56px 0 0;
`

const ImageBig = styled.img`
  width: 40%;
  height: auto;
  margin: auto;
  display: block;
`

const ImageSocial = styled.img`
  width: 20%;
  height: auto;
  margin: auto;
  display: block;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Column = styled.div``

const GameFinish = () => {
  const router = useRouter()

  return (
    <Container>
      <TextCenter>
        <BaseHeader variant="h1">เก่งมาก คุณทำสำเร็จแล้ว!</BaseHeader>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
          คะแนนที่ได้รับ:&nbsp;<span style={{ fontSize: '1.5rem', fontWeight: 600 }}>5</span>&nbsp;&nbsp;
          <img src="/img/gem2x.png" alt="" width="24" height="24" />
        </p>

        <br />
        <ImageBig src="/img/game_finish.png" alt="" />

        <p>
          <span>เคล็ดลับประจำวัน:</span>
          <span>รู้หรือไม่ นั่งหลังตรงเป็นนิสัยสามารถยืดอายุได้ถึง 5 ปี!</span>
        </p>

        <br />

        <p>อย่าลืมแชร์ให้โลกรู้ว่า &lsquo;คุณชนะ&rsquo;</p>
        <div>
          <ImageSocial src="/img/share.png" alt="" />
        </div>

        <br />
        <br />
        <Row>
          <Column
            className={css`
              margin-right: 16px;
            `}
          >
            <Button variant="outlined" onClick={() => router.push('/profile')}>
              กลับหน้าโปรไฟล์
            </Button>
          </Column>
          <Column>
            <Button
              variant="contained"
              onClick={() => router.push('/challenge')}
              className={css`
                color: white;
              `}
            >
              ดูความคืบหน้าของคุณ
            </Button>
          </Column>
        </Row>

        <br />
        <br />
        <br />
      </TextCenter>
      <br />
      <br />
      <br />
      <br />
    </Container>
  )
}

export default GameFinish
