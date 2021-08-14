/* eslint-disable @next/next/no-img-element */
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

  margin: 56px;
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
  return (
    <Container>
      <TextCenter>
        <BaseHeader variant="h1">เก่งมาก คุณทำสำเร็จแล้ว!</BaseHeader>
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
        <Row>
          <Column
            className={css`
              margin-right: 16px;
            `}
          >
            <Button variant="outlined">กลับชาเลนจ์รวม</Button>
          </Column>
          <Column>
            <Button variant="contained">ดูความคืบหน้าของคุณ</Button>
          </Column>
        </Row>

        <br />
        <br />
        <br />
      </TextCenter>
    </Container>
  )
}

export default GameFinish
