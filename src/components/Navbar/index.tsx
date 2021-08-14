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
        <Image src={icon} alt="icon" width="120" height="30" loading="lazy" />
        <Hidden smDown>
          <Stack spacing={0} direction="row">
            <MenuItem variant="body1">
              <Link href="/challenge">Challenge</Link>
            </MenuItem>
            <MenuItem variant="body1">
              <Link href="/content">Content</Link>
            </MenuItem>
            <MenuItem variant="body1">
              <Link href="/redeem">Redeem</Link>
            </MenuItem>
            <MenuItem variant="body1">
              <Link href="/about">About Us</Link>
            </MenuItem>
          </Stack>
        </Hidden>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <StyledAvatar sizes="small">H</StyledAvatar>
        <Typography variant="body1" color="white">
          Anusorn
        </Typography>
      </Stack>
    </Container>
  )
}

export default Navbar
