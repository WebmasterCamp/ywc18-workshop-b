import { ButtonProps } from '@material-ui/core'
import { StyledButton } from './styled'

const Button: React.FC = (props: ButtonProps) => {
  return <StyledButton {...props} />
}

export default Button
