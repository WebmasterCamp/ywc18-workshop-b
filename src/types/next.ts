import { Server as NetServer, Socket } from 'net'
import { NextApiResponse } from 'next'
import { Server as SocketIOServer } from 'socket.io'
import { Theme as MuiTheme } from '@material-ui/core'

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer
    }
  }
}

declare global {
  interface Window {
    OneSignal: any
  }
}

declare module '@emotion/react' {
  interface Theme extends MuiTheme {}
}
