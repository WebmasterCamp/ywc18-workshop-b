/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/css'
import styled from '@emotion/styled'

import Container from '@material-ui/core/Container'

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: auto;
  display: block;
`

const ProfRow = styled.div`
  // display block in mobile
  display: block;

  @media (min-width: 1000px) {
    display: flex;
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
          โปรไฟล์
        </h1>
        <ProfRow>
          <Image src="/img/profile.png" alt="" />
          <div style={{ flex: '1 1 0', marginLeft: 16 }}>
            <h2>Benjaporn Amornrat</h2>
            <div
              className={css`
                background: #fce19b;
                border-radius: 44.5px;
                padding: 8px 20px;
                margin-bottom: 20px;
              `}
            >
              คุณยืดเส้นวันนี้ครั้งแรก เก่งมาก!
            </div>
            <div
              className={css`
                background: #ffffff;

                box-shadow: 1px 5px 20px rgba(173, 187, 200, 0.4);
                border-radius: 12px;
                padding: 20px;
              `}
            >
              <div>
                <b>เล่นไปทั้งหมด:</b> 2:00 นาที
              </div>
              <div>
                <b>ชาเลนจ์ทั้งหมด:</b> 1 ชาเลนจ์
              </div>
              <div>
                <b>ชาเลนจ์ที่ทำไปแล้ว:</b> First Challenge
              </div>
            </div>
          </div>
        </ProfRow>
        <br />
        <br />
        <h2>ความสำเร็จ</h2>
        <div
          className={css`
            display: flex;
            align-items: flex-start;
          `}
        >
          <div style={{ marginRight: 16 }}>
            <img src="/img/ach1.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div style={{ marginRight: 16 }}>
            <img src="/img/ach2.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <img src="/img/ach3.png" alt="" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
        <br />
        <br />
        <h2>ตารางคะแนน</h2>
        <Image src="/img/leaderboard.png" alt="" />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  )
}
