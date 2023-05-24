import { Select, SelectProps, styled } from "@mui/material";

export const StyledTaskAssignment = styled(Select)<SelectProps>(({ theme }) => ({
  width: "400px",
  height: '40px',
  background: theme.palette.common.white,
}));
