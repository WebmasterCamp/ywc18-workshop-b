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
          สิทธิพิเศษ
        </h1>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          คะแนนที่มี: 5&nbsp;&nbsp;
          <img src="/img/gem2x.png" alt="" width="24" height="24" />
        </p>
        <h2>แนะนำสำหรับคุณ</h2>
        <ImageRow>
          <img src="/img/rec1.jpg" alt="" />
          <img src="/img/rec2.jpg" alt="" />
          <img src="/img/rec3.jpg" alt="" />
          <img src="/img/rec4.jpg" alt="" />
        </ImageRow>
        <div style={{ textAlign: 'right' }}>
          <Button variant="outlined">ดูเพิ่มเติม</Button>
        </div>
        <h2>ส่วนลดคอร์ส</h2>
        <ImageRow>
          <img src="/img/rec5.jpg" alt="" />
          <img src="/img/rec6.jpg" alt="" />
          <img src="/img/rec7.jpg" alt="" />
          <img src="/img/rec8.jpg" alt="" />
        </ImageRow>
        <div style={{ textAlign: 'right' }}>
          <Button variant="outlined">ดูเพิ่มเติม</Button>
        </div>
        <h2>สินค้า</h2>
        <ImageRow>
          <img src="/img/rec9.jpg" alt="" />
          <img src="/img/rec10.jpg" alt="" />
          <img src="/img/rec11.jpg" alt="" />
          <img src="/img/rec12.jpg" alt="" />
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
