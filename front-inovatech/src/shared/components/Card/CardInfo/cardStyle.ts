import { Button } from "@mui/base";
import { ContainerProps, styled } from "@mui/material";

export const StyledBtn = styled(Button)<ContainerProps>(({ theme }) => ({
  backgroundColor: "#eee",
  color: "#17394d",
  cursor: "pointer",
  border: "0",
  padding: "1rem 1rem",
  fontSize: "1rem",
}));
