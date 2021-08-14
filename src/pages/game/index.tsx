import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import QRCode from 'qrcode.react'

const Game = () => {
  const [currentGid, setCurrentGid] = useState('')
  const [windowUrl, setWindowUrl] = useState('')
  const socket = io()

  useEffect(() => {
    setWindowUrl(window.location.href)

    socket.on('connect', () => {
      socket.emit('join')
    })

    socket.on('gid', (gid) => {
      setCurrentGid(gid)
    })
  }, [])

  socket.on('mobile ready', ({ gid }) => {
    if (gid === currentGid) console.log('Ready Ja')
  })

  socket.on('mobile data', ({ gid, dataSet }) => {
    console.log(gid, dataSet)
    if (gid === currentGid) console.log(dataSet)
  })

  return (
    <div>
      <QRCode value={windowUrl + '/' + currentGid} />
      <p>
        <a href={windowUrl + '/' + currentGid}>{windowUrl + '/' + currentGid}</a>
      </p>
      <h1>Scan QR Code</h1>
      <p>ด้วยมือถือของคุณ</p>
    </div>
  )
}

export default Game
