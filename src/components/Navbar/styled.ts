import styled from '@emotion/styled'
import { Avatar, Typography } from '@material-ui/core'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(0, 3)};
`

export const MenuItem = styled(Typography)`
  padding: ${({ theme }) => theme.spacing(2, 3)};
  transition: background 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.dark};
  }
`

export const StyledAvatar = styled(Avatar)`
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
`
