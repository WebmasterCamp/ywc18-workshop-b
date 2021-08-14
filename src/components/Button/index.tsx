import { ButtonProps } from '@material-ui/core'
import { StyledButton } from './styled'

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />
}

export default Button
