import { useNavigate } from "react-router-dom";
import { ButtonStyles } from "./styles"

export const DashboardButton = () => {
  const navigate = useNavigate();
  
  return (
    <ButtonStyles onClick={() => navigate('/')}>Dashboard</ButtonStyles>
  )
}

export const ProblemSolvingButton = () => {
  const navigate = useNavigate();
  
  return (
    <ButtonStyles onClick={() => navigate('/problem-solving')}>Impedimentos</ButtonStyles>
  )
}