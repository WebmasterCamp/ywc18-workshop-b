import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'

let socketUpdateInterval = null

const GameSession: React.FC = () => {
  const [isReady, setIsReady] = useState(false)
  const router = useRouter()
  const { gid } = router.query

  const socket = io()

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
        <h1>จับไว้แน่นๆ แล้วทำตามท่าบนจอเลย</h1>
      ) : (
        <>
          <h1>ถือมือถือของคุณไว้ที่มือขวา ถ้าพร้อมแล้วก็ไปกันเลย</h1>
          <button onClick={onReadyButtonClick}>พร้อม!</button>
        </>
      )}
    </div>
  )
}

export default GameSession
