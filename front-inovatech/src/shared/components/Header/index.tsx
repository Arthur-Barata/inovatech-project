import { useNavigate } from "react-router-dom";
import { StyledButtonsHeader, StyledHeader, StyledImg } from './styles';
import logo from '../../../assets/icons/logo.png';
import { ButtonStyles } from "../Button/styles";
import { DashboardButton, ProblemSolvingButton } from "../Button";


export const Header = (props: {changeLog: any}) => {
  const changeLog = props.changeLog
  const navigation = useNavigate()

  return (
    <StyledHeader>
      <a href="/"><StyledImg src={logo} /></a>
      <StyledButtonsHeader>
      <DashboardButton/>
      <ProblemSolvingButton/>
      </StyledButtonsHeader>
      <ButtonStyles sx={{marginRight:'10rem'}} onClick={() => {
        changeLog()
        navigation('/login')
      }}
      >Sair</ButtonStyles>
    </StyledHeader>
  );
};
