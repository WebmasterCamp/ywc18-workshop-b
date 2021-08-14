import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import QRCode from 'qrcode.react'

import Button from 'src/components/Button'
import Card from '@material-ui/core/Card'
import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'

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
  const [currentGid, setCurrentGid] = useState('')
  const [windowUrl, setWindowUrl] = useState('')
  const [isReady, setIsReady] = useState(false)
  const [data, setData] = useState<any[]>([])

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
        if (gid === cgid) setIsReady(true)
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

  return (
    <Container>
      <TextCenter>
        <BaseHeader variant="h1">Let&apos;s do you first challenge</BaseHeader>
        {!isReady ? (
          <>
            <ScanText>Scan QR Code to</ScanText>
            <JoinText>Join the game</JoinText>
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
              Don&apos;t have smartphone?
            </UseFont>
            <Button variant="contained" size="large" onClick={isForceReady}>
              Join without smartphone
            </Button>
          </>
        ) : (
          <>
            <p>{JSON.stringify(data)}</p>
          </>
        )}
      </TextCenter>
    </Container>
  )
}

export default Game
