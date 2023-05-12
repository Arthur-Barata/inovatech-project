import logo from '../../../assets/icons/logo.png';
import { StyledHeader, StyledImg } from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledImg src={logo} />
    </StyledHeader>
  );
};
