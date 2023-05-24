import { ContainerProps, styled } from "@mui/material";

export const StyledFooter = styled("div")<ContainerProps>(({ theme }) => ({
  bottom: 0,
  width: "100%",
  padding: "0.2rem 3rem",
  background: theme.palette.primary.main,
  position: "fixed",
  margin: "0",
}));
