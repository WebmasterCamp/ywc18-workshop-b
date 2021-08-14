/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Button from 'src/components/Button'
import Container from '@material-ui/core/Container'

import { css } from '@emotion/css'
import styled from '@emotion/styled'

const Row = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
`

const Column = styled.div`
  flex: 1 1 0;
  text-align: center;
`

export default function Home() {
  const router = useRouter()

  return (
    <>
      <div
        className={css`
          background: url('/img/landing.jpg');
          background-size: cover;
          background-position: center center;
          padding: 80px;
        `}
      >
        <img src="/img/logo_landing.png" alt="" width="400" height="110" style={{ maxWidth: '100%', height: 'auto' }} />
        <h1 style={{ color: '#F98820', margin: '8px 0' }}>Office Syndrome Buddy</h1>
        <p style={{ margin: 0, fontSize: '1.1rem' }}>เพื่อนคู่ใจที่จะทำให้การเปลี่ยนแปลงสุขภาพกลายเป็นเรื่องสนุก!</p>
        <br />
        <br />
        <br />
        <Button
          variant="contained"
          size="large"
          className={css`
            margin-right: 8px;
            margin-bottom: 8px;
            color: white;
          `}
          onClick={() => router.push('/start/1')}
        >
          เริ่มกันเลย
        </Button>
        <Button
          variant="outlined"
          size="large"
          className={css`
            margin-right: 8px;
            margin-bottom: 8px;
          `}
          onClick={() =>
            // scroll to bottom
            window.scrollTo(0, document.body.scrollHeight)
          }
        >
          ดูข้อมูลเพิ่มเติม
        </Button>
      </div>
      <div
        className={css`
          background: #fde4cd;
          padding-top: 48px;
          padding-bottom: 48px;
        `}
      >
        <Container>
          <h2
            id="whywegood"
            className={css`
              text-align: center;
              font-size: 2rem;
            `}
          >
            ทำไมเราถึงดีที่สุดสำหรับคุณ
          </h2>
          <Row>
            <Column>
              <img src="/img/fun.png" alt="" width="144" height="144" style={{ maxWidth: '33%', height: 'auto' }} />
              <h3 style={{ color: '#F98820', fontSize: '1.5rem', marginBottom: 0 }}>สนุก</h3>
              <p>
                บำบัด Office Syndrome
                <br />
                ในรูปแบบเกม{' '}
              </p>
            </Column>
            <Column>
              <img src="/img/fast.png" alt="" width="144" height="144" style={{ maxWidth: '33%', height: 'auto' }} />
              <h3 style={{ color: '#F98820', fontSize: '1.5rem', marginBottom: 0 }}>รวดเร็ว</h3>
              <p>
                ใช้เวลาเล่นชาเลนจ์เฉลี่ย
                <br />
                เพียง 2 นาทีต่อครั้ง
              </p>
            </Column>
            <Column>
              <img src="/img/special.png" alt="" width="144" height="144" style={{ maxWidth: '33%', height: 'auto' }} />
              <h3 style={{ color: '#F98820', fontSize: '1.5rem', marginBottom: 0 }}>ฟรี</h3>
              <p>
                สุขภาพดี
                <br />
                ควบคู่สิทธิพิเศษ
              </p>
            </Column>
          </Row>
        </Container>
      </div>
    </>
  )
}
