import { ContainerProps, styled } from "@mui/material";

export const Container = styled("div")<ContainerProps>(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

export const MainTitle = styled("h1")<ContainerProps>(({ theme }) => ({
  padding: "0.3125rem 1.875rem",

  display: "flex",
  alignItems: "center",
  background: "transparent",
  color: `${theme.palette.primary.main}`,
  lineHeight: "2.25rem",
  svg: {
    fontSize: "2.5rem",
  },
}));

export const BoardsContainer = styled("div")<ContainerProps>(({ theme }) => ({
  flex: "1",
  width: "100%",
  overflowX: "scroll",
  overflowY: "hidden",
  height: "100%",
  paddingTop: "20px",
}));

export const Boards = styled("div")<ContainerProps>(({ theme }) => ({
  width: "fit-content",
  padding: "0px 30px",
  display: "inline-flex",
  gap: "30px",
  height: "100%",
}));

export const BoardsLast = styled("div")<ContainerProps>(({ theme }) => ({
  flexBasis: "290px",
  minWidth: "290px",
}));
