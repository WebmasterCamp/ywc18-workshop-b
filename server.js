const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

let port = process.env.PORT || 3000
let session = []

io.on('connection', (socket) => {
  // send back random id
  socket.on('join', () => {
    const sessionId = socket.id
    session = session.concat(socket.id).slice(session.length - 100)

    console.log('> [SIO] New Session', sessionId)
    console.log('> [SIO] All Session', JSON.stringify(session))

    socket.emit('gid', sessionId)
  })

  socket.on('client mobile ready', (desktopSocketId) => {
    console.log('> [SIO] Client Mobile Ready', desktopSocketId)
    io.emit('mobile ready', { gid: desktopSocketId })
  })

  socket.on('client mobile data', (data) => {
    console.log('> [SIO] Mobile Data', data)
    io.emit('mobile data', data)
  })

  socket.on('disconnect', () => {
    console.log('> [SIO] Disconnect', socket.id)
    session = session.filter((s) => s !== socket.id)
  })
})

nextApp.prepare().then(() => {
  app.get('*', (req, res) => nextHandler(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
