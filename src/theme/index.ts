import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#FFCFA3',
      main: '#F98820',
      dark: '#A65A15',
    },
    secondary: {
      light: '#FCE19B',
      main: '#F9BC20',
      dark: '#DDA71C',
    },
    text: {
      primary: '#313131',
    },
  },
  typography: {
    fontFamily: ['Kanit', 'Sarabun', 'sans-serif'].join(','),
  },
})

export default theme
