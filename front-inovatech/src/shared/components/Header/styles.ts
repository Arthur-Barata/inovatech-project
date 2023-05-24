import { ContainerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledHeader = styled("div")<ContainerProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: theme.palette.primary.main,
  height: "4rem",
  width: "100%",
}));

export const StyledImg = styled("img")<ContainerProps>(() => ({
  height: "5rem",
  paddingLeft: "1%",
}));
