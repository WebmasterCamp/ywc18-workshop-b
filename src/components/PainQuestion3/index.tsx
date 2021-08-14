import { useRouter } from 'next/dist/client/router'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import Link from 'next/link'
import { css } from '@emotion/css'
import OtherButton from '@/components/Button'
import Button from '@/components/Button'
import styled from '@emotion/styled'
import { FaStar } from 'react-icons/fa'

interface ButtonProps {
  isClicked: boolean
}

const ButtonClickable = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing(1, 3)};
  min-width: 200px;
  cursor: pointer;
  transition: background 0.25s ease;
  border-radius: 12px;
  box-shadow: 1px 5px 20px rgba(173, 187, 200, 0.4);
`

const ButtonClickableTrue = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing(1, 3)};
  min-width: 200px;
  cursor: pointer;
  transition: background 0.25s ease;
  border-radius: 12px;
  box-shadow: 1px 5px 20px rgba(173, 187, 200, 0.4);
  background: #ffcfa3;
`

const Painnnn: React.FC<{ header: string; items: string[] }> = ({ header, items }) => {
  const [state, setState] = useState<number>(7)

  const handleClick = (index: number) => () => {
    console.log(state, index)
    setState(index)
  }

  return (
    <>
      <Typography variant="h6" align="center" color="primary">
        {header}
      </Typography>
      <Stack spacing={2} alignItems="center">
        {items.map((item, index) => {
          if (state !== index + 1)
            return (
              <ButtonClickable key={index} onClick={handleClick(index + 1)}>
                <Typography align="center">{item}</Typography>{' '}
                {index === 2 && (
                  <div style={{ position: 'absolute', top: 9, right: 10, color: '#FACA51' }}>
                    <FaStar />
                  </div>
                )}
              </ButtonClickable>
            )
          else
            return (
              <ButtonClickableTrue key={index} onClick={handleClick(index + 1)}>
                <Typography align="center">{item}</Typography>
                {index === 2 && (
                  <div style={{ position: 'absolute', top: 9, right: 10, color: 'black' }}>
                    <FaStar />
                  </div>
                )}
              </ButtonClickableTrue>
            )
        })}
      </Stack>
    </>
  )
}

interface PainQuestion3Props {}

const StyledButton = styled(OtherButton)`
  padding: ${({ theme }) => theme.spacing(1, 5)};
`

interface ConfirmDialogProps {
  open: boolean
  handleClose: () => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ open, handleClose }) => {
  const router = useRouter()

  const handleOK = () => {
    window.OneSignal?.push(() => {
      window.OneSignal?.showSlidedownPrompt({ force: true })
    })
  }

  const nextPage = () => {
    router.push('/game')
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">ไม่ต้องกลัวลืมยืดเส้นอีกต่อไป</DialogTitle>
      <DialogContent>
        <DialogContentText>
          เพียงแค่ท่านกดปุ่ม &quot;รับการแจ้งเตือน&quot; ท่านก็จะได้รับการแจ้งเตือนทุกๆ ครั้งเมื่อถึงเวลายืดเส้นของท่าน
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={nextPage} color="primary">
          เอาไว้คราวหลัง
        </Button>
        <Button onClick={nextPage} color="primary" autoFocus variant="contained" style={{ color: 'white' }}>
          รับการแจ้งเตือน
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default function PainQuestion3({}: PainQuestion3Props) {
  const items = ['1-2 ครั้ง', '3-4 ครั้ง', '5-6 ครั้ง', '7-8 ครั้ง']

  const [open, setOpen] = useState(false)

  return (
    <>
      <Stack spacing={8} style={{ marginTop: 32 }}>
        <Stack spacing={1}>
          <Painnnn header="คุณต้องการยืดกี่ครั้งต่อวัน" items={items} />
        </Stack>
        <Stack direction="row" spacing={4} justifyContent="center">
          <Link href="/start/2" passHref>
            <StyledButton variant="outlined">ย้อนกลับ</StyledButton>
          </Link>
          <StyledButton variant="contained" style={{ color: 'white' }} onClick={() => setOpen(true)}>
            ตกลง
          </StyledButton>
        </Stack>
      </Stack>
      <ConfirmDialog open={open} handleClose={() => setOpen(false)} />
    </>
  )
}
