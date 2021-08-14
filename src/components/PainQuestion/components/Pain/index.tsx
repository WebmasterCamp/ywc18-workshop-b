import React from 'react'

import { Stack, Typography } from '@material-ui/core'
import Clickable from '@/components/PainQuestion/components/Clickable'

interface PainProps {
  header: string
  questions: string[]
}

export default function Pain({ header, questions }: PainProps) {
  return (
    <Stack spacing={2} style={{ width: '100%', padding: '0 50px' }} alignItems="center">
      <Typography variant="h4" align="center">
        {header}
      </Typography>
      {questions.map((content) => (
        <Clickable key={content} label={content} />
      ))}
    </Stack>
  )
}
