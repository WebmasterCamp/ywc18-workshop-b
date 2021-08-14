/* eslint-disable @next/next/no-img-element */
import Button from 'src/components/Button'
import Container from '@material-ui/core/Container'

import { css } from '@emotion/css'
import styled from '@emotion/styled'

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Column = styled.div`
  flex: 1 1 0;
  text-align: center;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: auto;
  display: block;
`

const ImageRow = styled(Row)`
  > img {
    width: 25%;
  }
`

export default function Challenge() {
  return (
    <>
      <Container>
        <h1
          className={css`
            font-weight: 600;
            font-size: 48px;
            line-height: 48px;
            color: #f98820;
          `}
        >
          ชาเลนจ์
        </h1>
        <h2>ชาเลนจ์ประจำวัน (1/5)</h2>
        <Image src="/img/challenge.png" alt="" />
        <p
          className={css`
            font-weight: 500;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
            color: #313131;
          `}
        >
          แล้วเจอกันอีกครั้งตอน {new Date().getHours() + 1}:00
        </p>
        <br />
        <p style={{ display: 'flex', alignItems: 'center' }}>
          คะแนนที่มี: 5&nbsp;&nbsp;
          <img src="/img/gem2x.png" alt="" width="24" height="24" />
        </p>
        <h2>แนะนำสำหรับคุณ</h2>
        <ImageRow>
          <img src="/img/buy (1).jpg" alt="" />
          <img src="/img/buy (2).jpg" alt="" />
          <img src="/img/buy (3).jpg" alt="" />
          <img src="/img/buy (4).jpg" alt="" />
        </ImageRow>
        <div style={{ textAlign: 'right' }}>
          <Button variant="outlined">ดูเพิ่มเติม</Button>
        </div>
        <h2>ปลดล็อกแล้ว</h2>
        <ImageRow>
          <img src="/img/unlocked (1).jpg" alt="" />
          <img src="/img/unlocked (2).jpg" alt="" />
          <img src="/img/unlocked (3).jpg" alt="" />
          <img src="/img/unlocked (4).jpg" alt="" />
        </ImageRow>
        <div style={{ textAlign: 'right' }}>
          <Button variant="outlined">ดูเพิ่มเติม</Button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  )
}
