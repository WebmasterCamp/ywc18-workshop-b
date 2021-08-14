/* eslint-disable @next/next/no-img-element */
import { Stack, Typography, Hidden } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import { Container, MenuItem, StyledAvatar } from './styled'

import icon from '../../../public/icon-full.svg'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Container>
      <Stack spacing={{ xs: 3, sm: 3 }} direction="row" style={{ width: '100%' }}>
        <Link href="/" passHref>
          <Image src={icon} alt="icon" width="120" height="30" loading="lazy" />
        </Link>
        <Hidden smDown>
          <Stack spacing={0} direction="row">
            <MenuItem variant="body1">
              <Link href="/challenge">ชาเลนจ์</Link>
            </MenuItem>
            <MenuItem variant="body1">
              <Link href="/content">บทความ</Link>
            </MenuItem>
            <MenuItem variant="body1">
              <Link href="/redeem">สิทธิพิเศษ</Link>
            </MenuItem>
          </Stack>
        </Hidden>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Link href="/profile" passHref>
          <Typography variant="body1" color="white" style={{ whiteSpace: 'nowrap', cursor: 'pointer' }}>
            ประวัติของฉัน
          </Typography>
        </Link>
        <Link href="/profile" passHref>
          <StyledAvatar sizes="small" style={{ cursor: 'pointer' }}>
            <img src="/img/profile.png" alt="" width="32" height="32" />
          </StyledAvatar>
        </Link>
      </Stack>
    </Container>
  )
}

export default Navbar
