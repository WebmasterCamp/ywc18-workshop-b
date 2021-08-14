import { Avatar, Stack, Typography } from '@material-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import { Container, MenuItem, StyledAvatar } from './styled'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Container>
      <Stack spacing={4} direction="row">
        <Image src="/icon-full.svg" alt="icon" width="158" height="36" loading="lazy" />
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
      </Stack>
      <Stack spacing={2} direction="row" alignItems="center">
        <StyledAvatar sizes="small">H</StyledAvatar>
        <Typography variant="body1">Anusorn</Typography>
      </Stack>
    </Container>
  )
}

export default Navbar
