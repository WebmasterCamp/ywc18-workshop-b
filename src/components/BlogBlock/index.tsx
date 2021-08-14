import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const StyledCard = styled(Card)`
  border-radius: 12px;
  max-width: 403px;
  width: 100%;
  margin: 10px;
`

export interface BlogBlockProps {
  title: string
  image: string
}

export default function BlogBlock({ title, image }: BlogBlockProps) {
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
