/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useState, useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'

import Button from 'src/components/Button'
import { Typography } from '@material-ui/core'
import { css } from '@emotion/css'

import styled from '@emotion/styled'
const DancingElement = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800% 1800%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  > h1 {
    color: #fff;
  }

  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @-moz-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @-o-keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
  @keyframes rainbow {
    0% {
      background-position: 0% 82%;
    }
    50% {
      background-position: 100% 19%;
    }
    100% {
      background-position: 0% 82%;
    }
  }
`

const UserOverlay = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;

  background: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 32px;
`

let socketUpdateInterval = null

const GameSession: React.FC = () => {
  const [isReady, setIsReady] = useState(false)
  const router = useRouter()
  const { gid } = router.query

  const socket = useMemo(() => io(), [])

  const onReadyButtonClick = () => {
    setIsReady(true)
    socket.emit('client mobile ready', gid)
  }

  let dataSet = []
  const onDeviceOrientationChange = (event) => {
    window.requestAnimationFrame(() => {
      dataSet.push({ alpha: event.alpha, beta: event.beta, gamma: event.gamma, absolute: event.absolute })
    })
  }

  useEffect(() => {
    if (isReady && window.DeviceOrientationEvent) {
      const sendDeviceOrientation = () => {
        console.log(dataSet)
        socket.emit('client mobile data', {
          gid,
          dataSet,
        })
        dataSet = []
      }

      socketUpdateInterval = setInterval(sendDeviceOrientation, 1000)

      window.addEventListener('deviceorientation', onDeviceOrientationChange, false)
    }

    return () => {
      clearInterval(socketUpdateInterval)
      window.removeEventListener('deviceorientation', onDeviceOrientationChange)
    }
  }, [isReady])

  return (
    <div>
      {isReady ? (
        <DancingElement>
          <h1>จับไว้แน่นๆ แล้วทำตามท่าบนจอเลย</h1>
        </DancingElement>
      ) : (
        <UserOverlay>
          <img src="/img/phone.png" alt="" />
          <h1>ถือมือถือของคุณไว้ที่มือขวา ถ้าพร้อมแล้วก็ไปกันเลย</h1>
          <Button
            variant="contained"
            size="large"
            onClick={onReadyButtonClick}
            className={css`
              color: white;
            `}
          >
            พร้อม!
          </Button>
        </UserOverlay>
      )}
    </div>
  )
}

export default GameSession
