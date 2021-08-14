import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import QRCode from 'qrcode.react'

import Button from 'src/components/Button'
import Card from '@material-ui/core/Card'
import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'

import { Line } from 'react-chartjs-2'

import YouTube from 'react-youtube'

import { css } from '@emotion/css'
import styled from '@emotion/styled'

const UseFont = styled(Typography)``

const TextCenter = styled.div`
  text-align: center;
`

const ScanText = styled(Typography)`
  font-weight: 500;
`

const JoinText = styled(Typography)`
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: #f98820;
  font-weight: 500;
`

const BaseHeader = styled(Typography)`
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  color: #f98820;

  margin: 56px;
`

const CardContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardContent = styled.span`
  display: inline-block;
  padding: 16px;
`

const Game = () => {
  const router = useRouter()

  const [currentGid, setCurrentGid] = useState('')
  const [windowUrl, setWindowUrl] = useState('')
  const [isReady, setIsReady] = useState(false)
  const [isHasData, setIsHasData] = useState(false)
  const [data, setData] = useState<any[]>([])

  const transformedData = {
    labels: new Array(data.length).fill(0).map((_, i) => i),
    datasets: [
      {
        label: 'Alpha',
        data: data.map(({ alpha }) => alpha),
        backgroundColor: '#FF6384',
        borderColor: '#FF638422',
      },
      {
        label: 'Beta',
        data: data.map(({ beta }) => beta),
        backgroundColor: '#4BC0C0',
        borderColor: '#4BC0C022',
      },
      {
        label: 'Gamma',
        data: data.map(({ gamma }) => gamma),
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB22',
      },
    ],
  }

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  useEffect(() => {
    setWindowUrl(window.location.href)

    const socket = io()

    socket.on('connect', () => {
      socket.emit('join')
    })

    socket.on('gid', (gid) => {
      setCurrentGid(gid)

      let cgid = gid

      const mobileReady = ({ gid }) => {
        if (gid === cgid) {
          setIsHasData(true)
          setIsReady(true)
        }
      }

      const mobileData = ({ gid, dataSet }) => {
        if (gid === cgid) setData(dataSet)
      }

      socket.on('mobile ready', mobileReady)

      socket.on('mobile data', mobileData)
    })
  }, [])

  const isForceReady = () => {
    setIsReady(true)
  }

  const onVideoEnd = () => {
    router.replace('/game/finish')
  }

  return (
    <Container>
      <TextCenter>
        {!isReady ? (
          <>
            <BaseHeader variant="h1">มาเริ่มเล่นชาเลนจ์แรกกัน</BaseHeader>
            <ScanText>โปรดแสกน QR Code</ScanText>
            <JoinText>เพื่อเริ่มเกม :D</JoinText>
            <CardContainer>
              <Card>
                <CardContent>
                  <QRCode value={'/game/' + currentGid} />
                </CardContent>
              </Card>
            </CardContainer>
            <Typography
              className={css`
                padding-top: 8px;
              `}
            >
              <a
                className={css`
                  color: #a9a9a9;
                `}
                href={'/game/' + currentGid}
              >
                {windowUrl + '/' + currentGid}
              </a>
            </Typography>
            <br />
            <UseFont
              className={css`
                padding-top: 8px;
                padding-bottom: 8px;
                color: #a9a9a9;
              `}
            >
              ไม่สะดวกใช้โทรศัพท์ตอนนี้?
            </UseFont>
            <Button variant="contained" size="large" onClick={isForceReady}>
              เล่นแบบไม่ใช้โทรศัพท์
            </Button>
          </>
        ) : (
          <>
            <div style={{ position: 'relative' }}>
              <BaseHeader variant="h1">มาเริ่มกันเลย!</BaseHeader>
              <YouTube
                videoId="Mtvtu8pfbyw"
                opts={{
                  width: '704',
                  height: '396',
                  playerVars: {
                    autoplay: 1,
                    fs: 0,
                    modestbranding: 1,
                  },
                }}
                onEnd={onVideoEnd}
              />
              <div
                className={css`
                  position: absolute;
                  bottom: 0;
                  right: -30px;
                  background: white;
                  width: 250px;
                  height: 150px;
                `}
              >
                {isHasData && <Line data={transformedData} options={chartOptions} />}
              </div>
            </div>
          </>
        )}
      </TextCenter>
    </Container>
  )
}

export default Game
