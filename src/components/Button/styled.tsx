import { Button } from '@material-ui/core'

import styled from '@emotion/styled'

export const StyledButton = styled(Button)`
  border-radius: 40px;
  padding: ${({ theme }) => theme.spacing('auto', 4)};
`
