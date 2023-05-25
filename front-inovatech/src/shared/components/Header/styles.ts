import { ContainerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledHeader = styled("div")<ContainerProps>(({ theme }) => ({
  display: "flex",
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  height: "6rem",
  width: "100%",
}));

export const StyledImg = styled("img")<ContainerProps>(() => ({
  height: "5rem",
  paddingLeft: "1%",
}));

export const StyledButtonsHeader = styled('div')<ContainerProps>(() => ({
  display: 'flex',
  gap: '1rem',
  marginLeft: '4rem'
}))