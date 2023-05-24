import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  height: "80vh",
  padding: "1rem",
  gap: "1rem",
}));

export const MainTitle = styled("h2")(({ theme }) => ({
  paddingLeft: "1rem",
  margin: 0,
  paddingTop: "1rem",
  color: `${theme.palette.primary.main}`,
}));
