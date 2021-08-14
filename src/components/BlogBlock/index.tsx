import { Box, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import React from 'react'
import styled from '@emotion/styled'

const StyledCard = styled(Card)`
  border-radius: 12px;
  max-width: 300px;
`

export interface BlogBlockProps {
  title: string
  desciption: string
  image: string
}

export default function BlogBlock({ title, desciption, image }: BlogBlockProps) {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia image={image} title="Contemplative Reptile" style={{ height: 150 }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desciption}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}
