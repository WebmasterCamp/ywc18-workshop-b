import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from '@material-ui/core'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

const StyledCard = styled(Card)`
  border-radius: 12px;
  max-width: 403px;
  width: 100%;
  margin: 10px;
`

export interface BlogBlockProps {
  title: string
  image: string
  premium?: boolean
}

interface ConfirmDialogProps {
  open: boolean
  handleClose: () => void
}

const PremiumModal: React.FC<ConfirmDialogProps> = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">
        <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
          สมัคร Premium
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Stack direction="row" spacing={2} sx={{ marginBottom: 4 }} alignItems="flex-end" justifyContent="center">
          <Typography variant="h6">เพียง</Typography>
          <Typography variant="h3" color="primary">
            299.-
          </Typography>
        </Stack>
        <Typography variant="body1">- ปลดล็อกทุกชาเลนจ์</Typography>
        <Typography variant="body1">- เข้าถึงบทความหัวข้อพิเศษ</Typography>
        <Typography variant="body1">- ติดตามความคืบหน้าของคุณ</Typography>
        <Box display="flex" width="100%" mt={3}>
          <Button color="primary" variant="contained" style={{ color: 'white' }} sx={{ margin: 'auto' }}>
            สมัครเลย
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default function BlogBlock({ title, image, premium }: BlogBlockProps) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    console.log(open)
    setOpen(false)
  }

  if (premium) {
    return (
      <>
        <StyledCard onClick={() => setOpen(true)}>
          <CardActionArea>
            <CardMedia image={image} title="Contemplative Reptile" style={{ height: 188.86 }} />
            <CardContent>
              <Typography gutterBottom variant="body1" component="h2">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
        <PremiumModal open={open} handleClose={handleClose} />
      </>
    )
  }
  return (
    <StyledCard>
      <Link href="/content/office" passHref>
        <CardActionArea>
          <CardMedia image={image} title="Contemplative Reptile" style={{ height: 188.86 }} />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </StyledCard>
  )
}
