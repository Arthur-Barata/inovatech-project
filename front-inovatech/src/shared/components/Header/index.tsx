import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledImg } from './styles';
import logo from '../../../assets/icons/logo.png';


export const Header = (props: {changeLog: any}) => {
  const changeLog = props.changeLog
  const navigation = useNavigate()

  return (
    <StyledHeader>
      <a href="/"><StyledImg src={logo} /></a>
      <button onClick={() => {
        changeLog()
        navigation('/login')
      }}
      >Sair</button>
    </StyledHeader>
  );
};
